import { AppRoute } from "../index.js";
import { convertMarkdownToDocx } from "@mohtasham/md-to-docx";
import fs from "fs";
import path from "path";
import JSZip from "jszip";

const dirname = import.meta.dirname;

export const route = new AppRoute("/download-rpp", "post", async (req, res) => {
  try {
    const { rppObject, md } = req.body;
    if (!rppObject && !md) {
      return res
        .status(400)
        .json({ error: "RPP object and markdown are required" });
    }

    // Parse markdown values in rppObject to DOCX-compatible format
    for (const [key, value] of Object.entries(rppObject)) {
      if (typeof value === "string") {
        // Docxtemplater free version only supports plain text, so we strip markdown formatting like bold/italic.
        rppObject[key] = value
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\*(.*?)\*/g, "$1")
          .replace(/__(.*?)__/g, "$1");
      }
    }

    // Force all heading levels to be bolded and replace <br> with a unique token for soft breaks
    let currentIndent = 0;
    const mdWithBoldHeading = md
      .replace(/^(#+)\s+(.+)$/gm, "$1 **$2**")
      .replace(/<br\s*\/?>/gi, "@@SOFT_BR@@")
      .replace(/<breakPage\s*\/?>/gi, "@@PAGE_BREAK@@")
      .split("\n")
      .map((line) => {
        if (line.trim() === "") return "";

        // Determine indent context from headers
        const headerMatch = line.match(/^(#+)\s/);
        if (headerMatch) {
          // Adjust so that H1 (#) has 0 indent, H2 (##) has 1 indent, etc.
          currentIndent = Math.max(0, headerMatch[1].length - 1);
          return line; // Do not inject indent tokens on the header itself
        }

        // Exclude formatting tables to prevent breaking MD logic
        if (/^[ \t]*\|/.test(line)) return line;

        // Skip adding markers if no indent is needed
        if (currentIndent === 0) return line;

        // For list items, inject the token AFTER the bullet point 
        const listMatch = line.match(/^([ \t]*)([-*+]|\d+\.)\s+(.*)/);
        if (listMatch) {
          const [, leading, bullet, text] = listMatch;
          return `${leading}${bullet} @@IND_LVL_${currentIndent}@@${text}`;
        }

        // For regular paragraphs, inject the token at the beginning
        return `@@IND_LVL_${currentIndent}@@${line}`;
      })
      .join("\n");

    // Convert markdown to DOCX buffer
    const blob = await convertMarkdownToDocx(mdWithBoldHeading, {
      style: {
        fontFamily: "Times New Roman",
        heading1Alignment: "CENTER",
      },
    });
    const arrayBuffer = await blob.arrayBuffer();

    // Post-process DOCX with JSZip
    const zip = await JSZip.loadAsync(arrayBuffer);
    let documentXml = await zip.file("word/document.xml").async("string");
    
    // Replace soft breaks and page breaks
    documentXml = documentXml.replace(/@@SOFT_BR@@/g, "</w:t><w:br/><w:t>");
    documentXml = documentXml.replace(/@@PAGE_BREAK@@/g, "</w:t><w:br w:type=\"page\"/><w:t>");

    // Apply native DOCX indents
    // Use [\\s\\S]*? to safely match across multiple lines in XML structures
    // First, fix fragmented tokens that might have been broken by <w:t> or <w:proofErr>
    documentXml = documentXml.replace(/@(?:<\/?[^>]+>)*@(?:<\/?[^>]+>)*I(?:<\/?[^>]+>)*N(?:<\/?[^>]+>)*D(?:<\/?[^>]+>)*_(?:<\/?[^>]+>)*L(?:<\/?[^>]+>)*V(?:<\/?[^>]+>)*L(?:<\/?[^>]+>)*_(?:<\/?[^>]+>)*(\d+)(?:<\/?[^>]+>)*@(?:<\/?[^>]+>)*@/g, "@@IND_LVL_$1@@");

    documentXml = documentXml.replace(
      /<w:p\b[^>]*>[\s\S]*?<\/w:p>/g,
      (pMatch) => {
        // Find our injected indentation token
        const levelMatch = pMatch.match(/@@IND_LVL_(\d+)@@/);
        if (!levelMatch) return pMatch;

        const level = parseInt(levelMatch[1], 10);
        
        // Remove the bare text token so it doesn't render in the document
        // We do not want to remove adjacent text like "Kelompok/Usia"
        let cleanP = pMatch.replace(/@@IND_LVL_\d+@@/g, "");

        // Is it a markdown list item? (It will have <w:numPr>)
        if (cleanP.includes("<w:numPr>")) {
          // Increase the list indent level by the heading depth
          cleanP = cleanP.replace(
            /<w:ilvl w:val="(\d+)"\s*\/>/,
            (match, currVal) => {
              const newLevel = parseInt(currVal, 10) + level;
              return `<w:ilvl w:val="${newLevel}"/>`;
            }
          );
        } else {
          // It's a standard paragraph or table wrapper: apply margin indentation
          // DOCX margin measurements: 720 twigs = 0.5 inches
          const indentVal = level * 720; 
          
          if (cleanP.includes("<w:pPr>")) {
            if (cleanP.includes("<w:ind ")) {
              cleanP = cleanP.replace(
                /<w:ind([^>]*)\/>/,
                (indMatch, attrs) => {
                  let newAttrs = attrs;
                  if (/w:left="\d+"/.test(attrs)) {
                    newAttrs = attrs.replace(/w:left="\d+"/, `w:left="${indentVal}"`);
                  } else {
                    newAttrs += ` w:left="${indentVal}"`;
                  }
                  return `<w:ind${newAttrs}/>`;
                }
              );
            } else {
              cleanP = cleanP.replace(
                "<w:pPr>",
                `<w:pPr><w:ind w:left="${indentVal}" />`
              );
            }
          } else {
            // No paragraph properties exist, create them
            cleanP = cleanP.replace(
              /^(<w:p\b[^>]*>)/,
              `$1<w:pPr><w:ind w:left="${indentVal}" /></w:pPr>`
            );
          }
        }
        
        return cleanP;
      }
    );

    zip.file("word/document.xml", documentXml);

    const mdDocxBuffer = await zip.generateAsync({ type: "nodebuffer" });
    fs.writeFileSync(path.join(dirname, "md.docx"), mdDocxBuffer);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    );
    res.setHeader("Content-Disposition", 'attachment; filename="RPP.docx"');
    res.send(mdDocxBuffer);
  } catch (error) {
    console.error("Error downloading RPP:", error);
    res.status(500).json({ error: "Failed to download RPP" });
  }
});

import fs from "fs";
import path from "path";
import vm from "vm";
import * as docx from "docx";

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const shared = {
  buffer: null,
};

const code = `
(async () => {
  // Temp var for saving buffer
  let buffer = null;

  // Create a new document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "Hello, World!",
            heading: HeadingLevel.TITLE,
          }),
          new Paragraph({
            children: [
              new TextRun("This is a simple example of creating a Word document using Node.js and the "),
              new TextRun({
                text: "docx",
                bold: true,
              }),
              new TextRun(" library."),
            ],
          }),
          new Paragraph({
            text: "Features included:",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "• Adding text with formatting",
          }),
          new Paragraph({
            text: "• Using headings",
          }),
          new Paragraph({
            text: "• Basic structure (sections, paragraphs, text runs)",
          }),
        ],
      },
    ],
  });

  // Generate the docx file as a buffer
  buffer = await Packer.toBuffer(doc);
  // Save the buffer to the shared object for access outside the VM
  shared.buffer = buffer;

  // Define the output path
  const filePath = path.join(__dirname, "example.docx");

  // Write the buffer to a file
  fs.writeFileSync(filePath, buffer);

  console.log("[DONE] Document saved as: " + filePath);
})();
`;

try {
  const context = {
    __dirname,
    __filename,
    console,
    fs,
    path,
    ...docx,
    shared,
  };

  const result = vm.runInNewContext(code, context);
  if (result && typeof result.then === "function") {
    result.then(() => {
      console.log("Buffer in shared object after VM execution:", shared.buffer ? "Buffer exists" : "No buffer");
    }).catch((err) => {
      console.error("Error in async code within VM:", err);
    });
  }
} catch (err) {
  console.error("Error executing VM code:", err);
} finally {
  console.log("Finished executing VM code.");
}

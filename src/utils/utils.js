import fs from 'fs'
import path from 'path'

export function parseMarkdownToObject (markdown) {
  const lines = markdown.split('\n')
  const result = {}
  let currentKey = null
  let currentValueLines = []

  for (const line of lines) {
    const keyMatch = line.match(/^\{([A-Z_]+)\}$/)
    if (keyMatch) {
      if (currentKey) {
        result[currentKey] = currentValueLines.join('\n').trim()
      }
      currentKey = keyMatch[1].trim()
      currentValueLines = []
    } else if (currentKey) {
      currentValueLines.push(line)
    }
  }

  if (currentKey) {
    result[currentKey] = currentValueLines.join('\n').trim()
  }

  return result
}

export function getKeysDescriptionFromMarkdown (markdown) {
  const result = {}
  const regex = /<!--\s*\{([A-Z_]+)\}\s+([\s\S]{0,2000}?)\s*-->/g

  let match
  while ((match = regex.exec(markdown)) !== null) {
    result[match[1]] = match[2].trim()
  }

  return result
}

export function removeCommentsFromMarkdown (markdown) {
  return markdown
    .replace(/<!--(?!-?>)(?:(?!-->)[\s\S]){0,50000}?-->/g, '')
    .replace(/\n\s*\n+/g, '\n')
    .trim()
}

export function removeImportRequire (content) {
  return content
    // Multi-line static import ... from '...' (PREVENT crossing into next import)
    .replace(/^\s*import\s+(?:(?!^\s*import\b)[\s\S])*?\bfrom\s+['"][^'"]+['"]\s*;?\s*$/gm, '')

    // Multi-line dynamic import(...) or require(...)
    .replace(/^\s*(?:const|let|var\s+)?\w+\s*=\s*(import|require)\s*\([\s\S]*?\)\s*;?\s*$/gm, '')

    // Single-line: import ... ; or require(...);
    .replace(/^\s*(import|require)(\s+|\s*\()([^\n]*?);?\s*$/gm, '')

    // Remove excess blank lines
    .replace(/\n\s*\n+/g, '\n')
    .trim()
}

/**
 * This function loads all Markdown files from a specified directory, reads their content, and constructs an object where each key is derived from the filename (converted to uppercase and underscores) and the value is the file's content. This allows for easy access to the content of multiple Markdown files in a structured format.
 * @param {*} dir - Content directory path
 * @returns {Object} - An object where keys are derived from filenames and values are file contents
 */
export function loadContexts (dir) {
  const context = {}
  const files = fs.readdirSync(dir)

  files.sort() // Ensure consistent order

  for (const file of files) {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(dir, file), 'utf-8')
      const key = path.basename(file, '.md').toUpperCase().replace(/-/g, '_')
      context[key] = content
    }
  }

  return context
}

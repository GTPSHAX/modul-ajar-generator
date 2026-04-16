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

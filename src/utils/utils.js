export function parseMarkdownToObject(markdown) {
  const lines = markdown.split('\n');
  const result = {};
  let currentKey = null;
  let currentValueLines = [];
  
  for (const line of lines) {
    const keyMatch = line.match(/^:(.+):$/);
    if (keyMatch) {
      if (currentKey) {
        result[currentKey] = currentValueLines.join('\n').trim();
      }
      currentKey = keyMatch[1].trim();
      currentValueLines = [];
    } else if (currentKey) {
      currentValueLines.push(line);
    }
  }
  
  if (currentKey) {
    result[currentKey] = currentValueLines.join('\n').trim();
  }
  
  return result;
}
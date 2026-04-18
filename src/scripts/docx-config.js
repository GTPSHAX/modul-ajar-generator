const properties = { // eslint-disable-line no-unused-vars
  page: {
    size: {
      orientation: 'portrait',
      width: 11906, // A4 width in twip (21 cm)
      height: 16838 // A4 height in twip (29.7 cm)
    },
    margin: {
      top: 1701, // 3 cm
      right: 1701, // 3 cm
      bottom: 1701, // 3 cm
      left: 2268 // 4 cm
    }
  }
}

const spacing = { // eslint-disable-line no-unused-vars
  line: 360,
  lineRule: 'AT_LEAST',
  before: 0,
  after: 0
}

const paragraphStyles = [ // eslint-disable-line no-unused-vars
  {
    id: 'Normal',
    name: 'Normal',
    basedOn: 'Normal',
    next: 'Normal',
    run: {
      font: 'Times New Roman',
      size: 24 // 12pt (docx uses half-points)
    }
  },
  {
    id: 'Title',
    name: 'Title',
    basedOn: 'Normal',
    next: 'Normal',
    run: {
      font: 'Times New Roman',
      size: 40, // 20pt
      bold: true
    }
  },
  {
    id: 'Heading1',
    name: 'Heading 1',
    basedOn: 'Normal',
    next: 'Normal',
    run: {
      font: 'Times New Roman',
      size: 32, // 16pt
      bold: true
    }
  },
  {
    id: 'Heading2',
    name: 'Heading 2',
    basedOn: 'Normal',
    next: 'Normal',
    run: {
      font: 'Times New Roman',
      size: 28, // 14pt
      bold: true
    }
  },
  {
    id: 'Heading3',
    name: 'Heading 3',
    basedOn: 'Normal',
    next: 'Normal',
    run: {
      font: 'Times New Roman',
      size: 26, // 13pt
      bold: true
    }
  }
]

export {
  properties,
  spacing,
  paragraphStyles
}

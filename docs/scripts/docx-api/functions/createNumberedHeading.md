[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / createNumberedHeading

# Function: createNumberedHeading()

> **createNumberedHeading**(`text`, `level?`, `numberingLevel?`, `numberingInstance?`, `center?`, `customSpacing?`, `indentSize?`, `numberingReference?`): `Paragraph`

Defined in: [src/scripts/docx-api.js:621](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L621)

Create a numbered heading using section-heading-numbering (or custom reference).
Requires getNumberingConfig() to be registered on the Document.

## Parameters

### text

`string`

### level?

`number` = `1`

### numberingLevel?

`number` = `...`

ilvl; defaults to level-1

### numberingInstance?

`number` = `1`

### center?

`boolean` = `false`

### customSpacing?

`Object` = `{}`

### indentSize?

`number` = `0`

### numberingReference?

`string` = `'section-heading-numbering'`

## Returns

`Paragraph`

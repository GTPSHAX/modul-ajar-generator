[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / createHeading

# Function: createHeading()

> **createHeading**(`text`, `level?`, `center?`, `customSpacing?`, `indentSize?`): `Paragraph`

Defined in: [src/scripts/docx-api.js:587](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L587)

Create a Heading paragraph (Heading1–Heading6 styles).
Newlines (\n) in text are preserved as line breaks within the same paragraph.

## Parameters

### text

`string`

### level?

`number` = `1`

Heading level (1–6)

### center?

`boolean` = `false`

### customSpacing?

`Object` = `{}`

### indentSize?

`number` = `0`

Left indent in twips

## Returns

`Paragraph`

[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / createParagraph

# Function: createParagraph()

> **createParagraph**(`content`, `customSpacing?`): `Paragraph`

Defined in: [src/scripts/docx-api.js:536](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L536)

Create a Paragraph with "Normal" style.
Supports HTML tags in string content and custom spacing.

## Parameters

### content

`string` \| `Object`

Text string or paragraph config object

### customSpacing?

`Object` = `{}`

Spacing overrides (before, after, line, lineRule)

## Returns

`Paragraph`

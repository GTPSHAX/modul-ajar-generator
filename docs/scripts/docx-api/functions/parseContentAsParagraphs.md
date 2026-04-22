[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / parseContentAsParagraphs

# Function: parseContentAsParagraphs()

> **parseContentAsParagraphs**(`content`): `Paragraph`[]

Defined in: [src/scripts/docx-api.js:513](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L513)

Intelligently parse any content string into Paragraph[].
Detects lists first; falls back to a single formatted paragraph.

## Parameters

### content

`string` \| `Object`

## Returns

`Paragraph`[]

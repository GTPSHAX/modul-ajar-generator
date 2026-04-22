[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / parseHtmlListTags

# Function: parseHtmlListTags()

> **parseHtmlListTags**(`text`): `Paragraph`[] \| `null`

Defined in: [src/scripts/docx-api.js:348](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L348)

Parse HTML <ul>/<ol>/<li> tags into Paragraph[].
Supports nested lists with cumulative level tracking.
Ordered lists use the `html-ordered-list` numbering reference.

## Parameters

### text

`string`

## Returns

`Paragraph`[] \| `null`

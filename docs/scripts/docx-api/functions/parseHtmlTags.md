[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / parseHtmlTags

# Function: parseHtmlTags()

> **parseHtmlTags**(`text`): `TextRun`[]

Defined in: [src/scripts/docx-api.js:268](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L268)

Parse inline HTML tags (<b>, <i>, <u>, <s>) into TextRun[].
Supports nesting (e.g. <b><i>text</i></b>).

## Parameters

### text

`string`

## Returns

`TextRun`[]

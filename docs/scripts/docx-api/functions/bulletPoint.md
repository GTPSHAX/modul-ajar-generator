[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / bulletPoint

# Function: bulletPoint()

> **bulletPoint**(`label`, `textOrChildren?`, `children?`): `Paragraph`[]

Defined in: [src/scripts/docx-api.js:730](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L730)

Create a bullet point paragraph with an optional bold label.
Supports optional children for nested sub-bullets.
Text / labels may contain HTML tags.

## Parameters

### label

`string`

Bold label (use '' for no label)

### textOrChildren?

`string` \| `any`[]

Body text, or children array if first is Array

### children?

`any`[] = `[]`

Sub-bullet items: strings or { label, text } objects

## Returns

`Paragraph`[]

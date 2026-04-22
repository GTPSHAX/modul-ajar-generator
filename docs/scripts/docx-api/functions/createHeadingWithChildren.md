[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / createHeadingWithChildren

# Function: createHeadingWithChildren()

> **createHeadingWithChildren**(`headingText`, `level?`, `children?`, `indentSize?`, `headingIndent?`, `headingOptions?`): `any`[]

Defined in: [src/scripts/docx-api.js:666](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L666)

Create a heading followed by indented child elements.
Nested calls accumulate indentation automatically.

## Parameters

### headingText

`string`

### level?

`number` = `1`

### children?

`any`[] = `[]`

Strings, Paragraphs, Tables, or nested createHeadingWithChildren results

### indentSize?

`number` = `720`

Twips applied to each child

### headingIndent?

`number` = `0`

Left indent on the heading itself

### headingOptions?

#### center?

`boolean`

#### customSpacing?

`Object`

#### numbering?

`Object`

{ level, instance, reference }

## Returns

`any`[]

[headingParagraph, ...indentedChildren]

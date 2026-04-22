[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / extractCodeFromMarkdownFence

# Function: extractCodeFromMarkdownFence()

> **extractCodeFromMarkdownFence**(`code`): `string`

Defined in: [src/utils/utils.js:143](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L143)

Cleans code extracted from markdown code blocks.
Removes the enclosing backticks while preserving inner content.
Use this when the entire input is a markdown code block.

## Parameters

### code

`string`

Code wrapped in markdown fences (```...```)

## Returns

`string`

- Code content without fence markers

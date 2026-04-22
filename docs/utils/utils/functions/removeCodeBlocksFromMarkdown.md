[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / removeCodeBlocksFromMarkdown

# Function: removeCodeBlocksFromMarkdown()

> **removeCodeBlocksFromMarkdown**(`markdown`): `string`

Defined in: [src/utils/utils.js:127](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L127)

Removes markdown code blocks and inline code from a markdown string.
Note: This removes MARKDOWN code blocks (e.g., from markdown with embedded code),
NOT pure code files. If the entire content is a code block, will return empty string.

## Parameters

### markdown

`string`

Markdown content with embedded code blocks

## Returns

`string`

- Markdown with code blocks removed

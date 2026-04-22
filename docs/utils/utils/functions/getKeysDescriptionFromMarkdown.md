[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / getKeysDescriptionFromMarkdown

# Function: getKeysDescriptionFromMarkdown()

> **getKeysDescriptionFromMarkdown**(`markdown`): `Object`

Defined in: [src/utils/utils.js:50](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L50)

Extracts keys and their descriptions from a markdown string.

## Parameters

### markdown

`string`

The markdown string to parse

## Returns

`Object`

- An object with keys and their descriptions

## Example

```ts
<!-- {KEY_NAME} This is the description for KEY_NAME --!> will return { KEY_NAME: "This is the description for KEY_NAME" }
```

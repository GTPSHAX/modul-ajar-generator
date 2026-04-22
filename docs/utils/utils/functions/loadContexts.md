[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / loadContexts

# Function: loadContexts()

> **loadContexts**(`dir`): `Object`

Defined in: [src/utils/utils.js:102](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L102)

This function loads all Markdown files from a specified directory, reads their content, and constructs an object where each key is derived from the filename (converted to uppercase and underscores) and the value is the file's content. This allows for easy access to the content of multiple Markdown files in a structured format.

## Parameters

### dir

`string`

Content directory path

## Returns

`Object`

- An object where keys are derived from filenames and values are file contents

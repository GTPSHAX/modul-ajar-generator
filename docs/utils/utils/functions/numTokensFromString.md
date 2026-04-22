[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / numTokensFromString

# Function: numTokensFromString()

> **numTokensFromString**(`message`, `model?`): `number`

Defined in: [src/utils/utils.js:173](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L173)

Counts the number of tokens in a string using the specified model's tokenizer.

## Parameters

### message

`string`

The string to count tokens for

### model?

`TiktokenModel` = `'gpt-5'`

The OpenAI model to use for tokenization (e.g., "gpt-3.5-turbo")

## Returns

`number`

- The number of tokens in the string

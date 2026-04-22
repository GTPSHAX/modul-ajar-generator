[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [utils/utils](../README.md) / validateBodyParams

# Function: validateBodyParams()

> **validateBodyParams**(`body`, ...`requiredParams`): `object`

Defined in: [src/utils/utils.js:188](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/utils/utils.js#L188)

Validates that all required parameters are present in the request body.

## Parameters

### body

`Object`

The request body

### requiredParams

...`any`[]

The required parameter names

## Returns

`object`

- An object containing a boolean indicating validity and an error message (if applicable)

### message

> **message**: `string` \| `null`

### status

> **status**: `boolean`

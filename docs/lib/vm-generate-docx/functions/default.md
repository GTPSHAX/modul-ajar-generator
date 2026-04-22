[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [lib/vm-generate-docx](../README.md) / default

# Function: default()

> **default**(`credentialVars?`, `predefinedVars`): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: [src/lib/vm-generate-docx.js:33](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/vm-generate-docx.js#L33)

Generates a DOCX document by executing the provided template code in a VM context.
The template code can utilize the `docx` library and any additional predefined variables passed in.
The generated document buffer is returned by main() from the VM context.

## Parameters

### credentialVars?

`Object` = `{}`

The credentials variable of the document.

### predefinedVars

`string` \| `Object`

An optional object containing predefined variables that will be available in the VM context when executing the template code.

## Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

A promise resolving to the generated DOCX document buffer.

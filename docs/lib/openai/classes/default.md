[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [lib/openai](../README.md) / default

# Class: default

Defined in: [src/lib/openai.js:33](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L33)

Simple wrapper around OpenAI API to manage contexts and generate responses.
It loads contexts from files in the context directory and allows chatting with the model using those contexts.

## Constructors

### Constructor

> **new default**(`diableDefaultContext?`, `apiKey?`, `model?`): `OpenAIWrapper`

Defined in: [src/lib/openai.js:40](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L40)

Constructor for OpenAIWrapper

#### Parameters

##### diableDefaultContext?

`boolean` = `false`

Whether to disable loading default contexts from files. Default is false (load contexts).

##### apiKey?

`string` = `OPENAI_API_KEY`

OpenAI API key. Defaults to OPENAI_API_KEY environment variable.

##### model?

`string` = `OPENAI_MODEL`

OpenAI model to use. Defaults to OPENAI_MODEL environment variable.

#### Returns

`OpenAIWrapper`

## Properties

### mClient

> **mClient**: `OpenAI`

Defined in: [src/lib/openai.js:41](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L41)

***

### mContexts

> **mContexts**: `any`[]

Defined in: [src/lib/openai.js:46](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L46)

***

### mModel

> **mModel**: `string`

Defined in: [src/lib/openai.js:45](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L45)

## Accessors

### client

#### Get Signature

> **get** **client**(): `OpenAI`

Defined in: [src/lib/openai.js:66](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L66)

##### Returns

`OpenAI`

***

### model

#### Get Signature

> **get** **model**(): `string`

Defined in: [src/lib/openai.js:62](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L62)

##### Returns

`string`

## Methods

### chat()

> **chat**(`prompt`): `Promise`\<`string`\>

Defined in: [src/lib/openai.js:109](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L109)

Chat with the model using the loaded contexts and provided prompt.

#### Parameters

##### prompt

`string` \| `string`[] \| `object`[]

The prompt to send to the model. Can be a string, an array of message objects, or an array of strings.

#### Returns

`Promise`\<`string`\>

- The response from the model.

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [src/lib/openai.js:58](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L58)

#### Parameters

##### context

`any`

#### Returns

`void`

***

### setModel()

> **setModel**(`model`): `void`

Defined in: [src/lib/openai.js:54](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/lib/openai.js#L54)

#### Parameters

##### model

`any`

#### Returns

`void`

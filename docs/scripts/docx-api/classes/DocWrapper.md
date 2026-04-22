[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / DocWrapper

# Class: DocWrapper

Defined in: [src/scripts/docx-api.js:1358](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1358)

Fluent builder for the top-level docx Document.

Handles Document construction boilerplate: numbering config, default styles,
and section accumulation. Call .build() for a raw Document or .save() to write a file.

## Example

```ts
const buffer = await new DocWrapper()
  .withDefaultStyles()
  .addSection(coverPage)               // raw section object or SectionWrapper
  .addSection(
    new SectionWrapper(properties)
      .heading('SECTION A', 1)
      .sp()
      .table(new TableWrapper()...)
  )
  .toBuffer()
```

## Constructors

### Constructor

> **new DocWrapper**(): `DocWrapper`

Defined in: [src/scripts/docx-api.js:1359](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1359)

#### Returns

`DocWrapper`

## Properties

### \_numberingConfig

> **\_numberingConfig**: `any`[]

Defined in: [src/scripts/docx-api.js:1361](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1361)

***

### \_sections

> **\_sections**: `any`[]

Defined in: [src/scripts/docx-api.js:1360](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1360)

***

### \_styles

> **\_styles**: `Object` \| \{ `default`: `DocumentDefaults`; `paragraphStyles`: (\{ `basedOn`: `string`; `id`: `string`; `name`: `string`; `next`: `string`; `run`: \{ `bold?`: `undefined`; `font`: `string`; `size`: `number`; \}; \} \| \{ `basedOn`: `string`; `id`: `string`; `name`: `string`; `next`: `string`; `run`: \{ `bold`: `boolean`; `font`: `string`; `size`: `number`; \}; \})[]; \} \| `null`

Defined in: [src/scripts/docx-api.js:1362](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1362)

## Methods

### addSection()

> **addSection**(`section`): `DocWrapper`

Defined in: [src/scripts/docx-api.js:1409](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1409)

Append a section. Accepts a SectionWrapper (auto-built) or a raw section descriptor.

#### Parameters

##### section

[`SectionWrapper`](SectionWrapper.md) \| \{ `children`: `any`[]; `properties?`: `Object`; \}

#### Returns

`DocWrapper`

***

### build()

> **build**(): `File_2`

Defined in: [src/scripts/docx-api.js:1420](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1420)

Build and return the docx Document object.

#### Returns

`File_2`

***

### save()

> **save**(`filepath`): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: [src/scripts/docx-api.js:1442](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1442)

Build the Document, write it to disk, and return the Buffer.

#### Parameters

##### filepath

`string`

Output file path (e.g. 'output/MyDoc.docx')

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

***

### toBuffer()

> **toBuffer**(): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: [src/scripts/docx-api.js:1432](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1432)

Build the Document and return a Buffer.

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

***

### withDefaultStyles()

> **withDefaultStyles**(): `DocWrapper`

Defined in: [src/scripts/docx-api.js:1371](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1371)

Apply default styles from docx-config (paragraphStyles + DocumentDefaults spacing).
This is the recommended way to apply consistent typography.

#### Returns

`DocWrapper`

***

### withNumbering()

> **withNumbering**(`config`): `DocWrapper`

Defined in: [src/scripts/docx-api.js:1398](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1398)

Replace the default numbering config.
The default already includes html-ordered-list, html-unordered-list, section-heading-numbering.

#### Parameters

##### config

`any`[]

Raw numbering config array

#### Returns

`DocWrapper`

***

### withStyles()

> **withStyles**(`stylesObj`): `DocWrapper`

Defined in: [src/scripts/docx-api.js:1386](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1386)

Apply a custom styles object (overrides withDefaultStyles).
Accepts the same shape as Document `styles`.

#### Parameters

##### stylesObj

`Object`

#### Returns

`DocWrapper`

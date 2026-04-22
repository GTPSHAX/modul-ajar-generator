[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / SectionWrapper

# Class: SectionWrapper

Defined in: [src/scripts/docx-api.js:1190](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1190)

Fluent builder for a single Document section (one "page" of content).

Eliminates manual array spreading and repeated createParagraph('') calls.
All methods return `this` for chaining — except `.getChildren()` and `.build()`.

## Example

```ts
new SectionWrapper(properties)
  .heading('IDENTIFIKASI', 1, { numbering: { level: 0 } })
  .sp()
  .table(new TableWrapper().setFitContent().addLabelValuePairRow('A', 'B'))
  .sp(2)
  .section('DESAIN PEMBELAJARAN', 1,
    new SectionWrapper()
      .sp()
      .add(...parseContentAsParagraphs('<ul><li>item</li></ul>')),
    { numbering: { level: 0 } }
  )
  .build()
```

## Constructors

### Constructor

> **new SectionWrapper**(`sectionProperties?`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1195](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1195)

#### Parameters

##### sectionProperties?

`Object` \| `null`

docx page properties (size, margin, etc.)
  Pass null/undefined to use the Document's default properties.

#### Returns

`SectionWrapper`

## Properties

### \_children

> **\_children**: `any`[]

Defined in: [src/scripts/docx-api.js:1197](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1197)

***

### \_properties

> **\_properties**: `Object` \| `null`

Defined in: [src/scripts/docx-api.js:1196](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1196)

## Methods

### add()

> **add**(...`items`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1207](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1207)

Add one or more children — Paragraphs, Tables, arrays, or any docx object.
Arrays are automatically flattened one level, matching the spread pattern.

#### Parameters

##### items

...`any`[]

#### Returns

`SectionWrapper`

***

### build()

> **build**(): `object`

Defined in: [src/scripts/docx-api.js:1329](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1329)

Build and return the raw section descriptor { properties?, children }.
The result is accepted directly by Document `sections` or DocWrapper.addSection().

#### Returns

`object`

##### children

> **children**: `any`[]

##### properties?

> `optional` **properties?**: `Object`

***

### getChildren()

> **getChildren**(): `any`[]

Defined in: [src/scripts/docx-api.js:1319](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1319)

Return the accumulated children array (used when this section is nested inside another).

#### Returns

`any`[]

***

### heading()

> **heading**(`text`, `level?`, `options?`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1254](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1254)

Add a heading paragraph.

#### Parameters

##### text

`string`

##### level?

`number` = `1`

##### options?

###### center?

`boolean`

###### customSpacing?

`Object`

###### indent?

`number`

Left indent in twips

###### numbering?

`Object`

{ level, instance?, reference? }

#### Returns

`SectionWrapper`

***

### para()

> **para**(`content?`, `customSpacing?`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1237](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1237)

Add a paragraph with optional custom spacing.
Text may include HTML tags.

#### Parameters

##### content?

`string` \| `Object`

##### customSpacing?

`Object` = `{}`

#### Returns

`SectionWrapper`

***

### section()

> **section**(`text`, `level?`, `children?`, `options?`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1289](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1289)

Add a section: a heading followed by indented children.
Children may be a raw array or a nested SectionWrapper.
Supports the same headingOptions as createHeadingWithChildren.

#### Parameters

##### text

`string`

Heading text

##### level?

`number` = `1`

##### children?

`any`[] \| `SectionWrapper`

##### options?

headingOptions + indentSize/headingIndent overrides

###### center?

`boolean`

###### customSpacing?

`Object`

###### headingIndent?

`number`

###### indentSize?

`number`

###### numbering?

`Object`

{ level, instance?, reference? }

#### Returns

`SectionWrapper`

***

### sp()

> **sp**(`n?`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1224](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1224)

Add n empty spacing paragraphs. Replaces repeated createParagraph('') calls.

#### Parameters

##### n?

`number` = `1`

#### Returns

`SectionWrapper`

***

### table()

> **table**(`tableOrWrapper`): `SectionWrapper`

Defined in: [src/scripts/docx-api.js:1308](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1308)

Add a table. Accepts either a TableWrapper (calls .build()) or a raw Table object.

#### Parameters

##### tableOrWrapper

`Table` \| [`TableWrapper`](TableWrapper.md)

#### Returns

`SectionWrapper`

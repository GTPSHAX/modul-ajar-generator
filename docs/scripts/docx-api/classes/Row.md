[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / Row

# Class: Row

Defined in: [src/scripts/docx-api.js:882](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L882)

Fluent builder for a single table row.

## Example

```ts
new Row()
  .addTitleCell('Header')
  .addTextCell('Cell 1')
  .setHeight(400, 'exact')
  .build()
```

## Constructors

### Constructor

> **new Row**(): `Row`

Defined in: [src/scripts/docx-api.js:883](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L883)

#### Returns

`Row`

## Properties

### cantSplit

> **cantSplit**: `boolean`

Defined in: [src/scripts/docx-api.js:886](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L886)

***

### cells

> **cells**: `any`[]

Defined in: [src/scripts/docx-api.js:884](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L884)

***

### height

> **height**: \{ `rule`: `"atLeast"` \| `"exact"` \| `"auto"`; `value`: `number`; \} \| `null`

Defined in: [src/scripts/docx-api.js:885](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L885)

***

### tableHeader

> **tableHeader**: `boolean`

Defined in: [src/scripts/docx-api.js:887](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L887)

## Methods

### addCell()

> **addCell**(`cell`): `Row`

Defined in: [src/scripts/docx-api.js:895](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L895)

Add a cell or array of cells.

#### Parameters

##### cell

`TableCell` \| `TableCell`[]

#### Returns

`Row`

***

### addFormField()

> **addFormField**(`label`): `Row`

Defined in: [src/scripts/docx-api.js:927](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L927)

Add a form field pair: bold label cell + empty input cell.

#### Parameters

##### label

`string`

#### Returns

`Row`

***

### addLabelValue()

> **addLabelValue**(`label`, `value`, `options?`): `Row`

Defined in: [src/scripts/docx-api.js:996](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L996)

Add two cells: a bold label and a value. Convenience for 2-column data rows.

#### Parameters

##### label

`string`

##### value

`string`

##### options?

`Object` = `{}`

{ labelOptions, valueOptions }

#### Returns

`Row`

***

### addTextCell()

> **addTextCell**(`text`, `options?`): `Row`

Defined in: [src/scripts/docx-api.js:963](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L963)

Add a content cell. Text may contain HTML tags, lists, or markdown lists.

#### Parameters

##### text

`string`

##### options?

###### borders?

`Object`

###### columnSpan?

`number`

###### margins?

`Object`

###### rowSpan?

`number`

###### width?

`Object`

#### Returns

`Row`

***

### addTitleCell()

> **addTitleCell**(`text`, `columnSpan?`): `Row`

Defined in: [src/scripts/docx-api.js:909](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L909)

Add a shaded title cell that spans multiple columns.
Supports \n for multiple lines within the cell.

#### Parameters

##### text

`string`

##### columnSpan?

`number` = `2`

#### Returns

`Row`

***

### build()

> **build**(): `TableRow`

Defined in: [src/scripts/docx-api.js:1020](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1020)

#### Returns

`TableRow`

***

### setAsHeader()

> **setAsHeader**(`isHeader?`): `Row`

Defined in: [src/scripts/docx-api.js:1017](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1017)

#### Parameters

##### isHeader?

`boolean` = `true`

#### Returns

`Row`

***

### setCantSplit()

> **setCantSplit**(`cantSplit?`): `Row`

Defined in: [src/scripts/docx-api.js:1014](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1014)

#### Parameters

##### cantSplit?

`boolean` = `true`

#### Returns

`Row`

***

### setHeight()

> **setHeight**(`height`, `rule?`): `Row`

Defined in: [src/scripts/docx-api.js:1008](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1008)

Set fixed or minimum row height.

#### Parameters

##### height

`number`

Twips

##### rule?

`"atLeast"` \| `"exact"` \| `"auto"`

#### Returns

`Row`

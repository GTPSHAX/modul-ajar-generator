[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / TableWrapper

# Class: TableWrapper

Defined in: [src/scripts/docx-api.js:1048](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1048)

Fluent builder for a complete Table.

Convenience methods (addTitleRow, addFormFieldRow, addLabelValueRow, addLabelValuePairRow)
return `this` for easy chaining. For full row control, use addRow() or addRowObject().

## Example

```ts
new TableWrapper()
  .setFitContent()
  .addTitleRow('My Table')
  .addLabelValuePairRow('<b>Key</b>', 'Value')
  .addRowObject(new Row().addTextCell('Custom').addTextCell('Row'))
  .build()
```

## Constructors

### Constructor

> **new TableWrapper**(): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1049](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1049)

#### Returns

`TableWrapper`

## Properties

### borders

> **borders**: `Object` \| `null`

Defined in: [src/scripts/docx-api.js:1053](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1053)

***

### columnWidths

> **columnWidths**: `number`[] \| `null`

Defined in: [src/scripts/docx-api.js:1056](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1056)

***

### indent

> **indent**: `object`

Defined in: [src/scripts/docx-api.js:1052](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1052)

#### size

> **size**: `number` = `0`

#### type

> **type**: `"auto"` = `WidthType.AUTO`

***

### layout

> **layout**: `"autofit"` \| `null`

Defined in: [src/scripts/docx-api.js:1055](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1055)

***

### margins

> **margins**: `Object` \| `null`

Defined in: [src/scripts/docx-api.js:1054](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1054)

***

### rows

> **rows**: `any`[]

Defined in: [src/scripts/docx-api.js:1050](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1050)

***

### width

> **width**: `object`

Defined in: [src/scripts/docx-api.js:1051](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1051)

#### size

> **size**: `number` = `100`

#### type

> **type**: `"pct"` = `WidthType.PERCENTAGE`

## Methods

### addFormFieldRow()

> **addFormFieldRow**(`label`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1094](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1094)

Add a form field row (label + blank input cell).

#### Parameters

##### label

`string`

#### Returns

`TableWrapper`

***

### addLabelValuePairRow()

> **addLabelValuePairRow**(`label`, `value`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1105](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1105)

Add a 2-column row with bold label + value.

#### Parameters

##### label

`string`

##### value

`string`

#### Returns

`TableWrapper`

***

### addLabelValueRow()

> **addLabelValueRow**(`label1`, `value1`, `label2`, `value2`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1118](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1118)

Add a 4-column row with two label/value pairs side by side.

#### Parameters

##### label1

`string`

##### value1

`string`

##### label2

`string`

##### value2

`string`

#### Returns

`TableWrapper`

***

### addRow()

> **addRow**(): [`Row`](Row.md)

Defined in: [src/scripts/docx-api.js:1063](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1063)

Create a new empty Row and add it.

#### Returns

[`Row`](Row.md)

- The new Row (not TableWrapper — use .build() to close)

***

### addRowObject()

> **addRowObject**(`row`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1074](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1074)

Add a pre-built Row instance.

#### Parameters

##### row

[`Row`](Row.md)

#### Returns

`TableWrapper`

***

### addTitleRow()

> **addTitleRow**(`text`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1084](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1084)

Add a shaded title row spanning 2 columns.

#### Parameters

##### text

`string`

Supports \n for multiple lines

#### Returns

`TableWrapper`

***

### build()

> **build**(): `Table`

Defined in: [src/scripts/docx-api.js:1152](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1152)

#### Returns

`Table`

***

### setBorders()

> **setBorders**(`borders`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1146](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1146)

#### Parameters

##### borders

`Object`

#### Returns

`TableWrapper`

***

### setColumnWidths()

> **setColumnWidths**(`widths`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1140](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1140)

#### Parameters

##### widths

`number`[]

#### Returns

`TableWrapper`

***

### setFitContent()

> **setFitContent**(): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1133](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1133)

Enable AUTOFIT layout — table width adapts to its content.

#### Returns

`TableWrapper`

***

### setIndent()

> **setIndent**(`size`, `type?`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1127](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1127)

#### Parameters

##### size

`number`

##### type?

###### AUTO

`"auto"`

###### DXA

`"dxa"`

###### NIL

`"nil"`

###### PERCENTAGE

`"pct"`

#### Returns

`TableWrapper`

***

### setMargins()

> **setMargins**(`margins`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1149](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1149)

#### Parameters

##### margins

`Object`

#### Returns

`TableWrapper`

***

### setWidth()

> **setWidth**(`size`, `type?`): `TableWrapper`

Defined in: [src/scripts/docx-api.js:1124](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1124)

#### Parameters

##### size

`number`

##### type?

###### AUTO

`"auto"`

###### DXA

`"dxa"`

###### NIL

`"nil"`

###### PERCENTAGE

`"pct"`

#### Returns

`TableWrapper`

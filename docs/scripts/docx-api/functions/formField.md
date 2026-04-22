[**simple-rpp-builder-express**](../../../README.md)

***

[simple-rpp-builder-express](../../../modules.md) / [scripts/docx-api](../README.md) / formField

# ~~Function: formField()~~

> **formField**(`label`): `TableCell`[]

Defined in: [src/scripts/docx-api.js:1472](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/scripts/docx-api.js#L1472)

## Parameters

### label

`any`

## Returns

`TableCell`[]

## Deprecated

Use new Row().addFormField(label).build() inside TableWrapper instead.
Returns a [labelCell, inputCell] pair for use in a TableRow.

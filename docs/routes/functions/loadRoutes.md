[**simple-rpp-builder-express**](../../README.md)

***

[simple-rpp-builder-express](../../modules.md) / [routes](../README.md) / loadRoutes

# Function: loadRoutes()

> **loadRoutes**(): `Promise`\<`any`\>

Defined in: [src/routes/index.js:36](https://github.com/GTPSHAX/modul-ajar-generator/blob/b289afe9ca1732f9eded2c2ea69c2df1e9140e55/src/routes/index.js#L36)

Dynamically loads and registers all routes from the routes directory.
Scans the current directory recursively for `.js` and `.ts` files, expecting each valid
route file to export an instance of `AppRoute` under the name `route`.

## Returns

`Promise`\<`any`\>

A promise that resolves to the configured Express Router.

# Node to Sharepoint
POC con un ejemplo de copia desde NodeJS hacia Sharepoint Online de CENCOSUD.

## Dependencias
- [spsave](https://www.npmjs.com/package/spsave)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Modo de uso

1) Replicar archivo .env.example a .env
```bash
cp .env.example .env
```
2) Actualizar las variables de entorno

| VARIABLE | DESCRIPCION | EJEMPLO |
| ------ | ------ | ------ |
| SP_HOST | Host del Sharepoint de CENCOSUD | https://cnco-my.sharepoint.com/personal/adrian_gomez_cencosud_cl/ |
| SP_USER | Usuario de CENCOSUD que cargará los archivos | adrian.gomez@cencosud.cl |
| SP_PASSWORD | Contraseña de la cuenta CENCOSUD | loremipsum |

## Consideraciones
La implementacion fue considerada como Module (Por sobre CommonJS), pero si se necesita usar en formato CommonJS la inclusion de spsave debe ser realizada de la siguiente manera
```js
var spsave = require("spsave").spsave;
```
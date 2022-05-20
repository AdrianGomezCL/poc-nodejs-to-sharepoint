import 'dotenv/config';
import { spsave } from 'spsave';
import fs from 'fs';

const {
    SP_HOST,
    SP_USER,
    SP_PASSWORD,
} = process.env;

const coreOptions = {
    siteUrl: SP_HOST,
};

const authContext = {
    username: SP_USER,
    password: SP_PASSWORD,
    online: true,
};

/**
 * Para mayor documentacion respecto a fileOptions referir a la documentacion:
 * https://www.npmjs.com/package/spsave
*/
const fileOptions = {
    folder: 'nodejs-poc', // Directorio donde se crearà el archivo
    fileName: 'test.txt', // Nombre del archivo que se creará
    fileContent: fs.readFileSync('test.txt'), // Archivo de origen
};

spsave(coreOptions, authContext, fileOptions)
    .then(function () {
        console.log('saved');
    })
    .catch(function (err) {
        console.log(err);
    });

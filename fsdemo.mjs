//used to file input output 
//const fs = require("fs/promises");

import {readFile} from 'fs/promises';

const filePath = new URL('./index.html' ,import.meta.url );
const dat = await readFile(filePath,{encoding:'utf-8'});
//console.log(import.meta.path);
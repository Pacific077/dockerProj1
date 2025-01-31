import DataUriParser from 'datauri/parser.js';

import path from "path"

const getDataUri = (file)=>{
    console.log("file in data uri ",file);
    const parser = new DataUriParser();
    const extname = path.extname(file.originalname).toString();
    console.log("extname",extname);
    return parser.format(extname,file.buffer);
}

export default getDataUri
import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import fetch from './fetch/fetch';
import insert from './insert/insert';
import update from './update/update';
import remove from './remove/remove';


//server.ts file used to collaborate the custom file
//server.ts file is the main server file 
// node starts the execution from "server.ts" file


let app:any =express();

//enable cors policy
app.use(cors());

//set the MIME type 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


//use the module

app.use("/fetch",fetch);
app.use("/insert",insert);
app.use("/update",update);
app.use("/remove",remove);


app.listen(8080,()=>{
    console.log("Server Started ....")
})



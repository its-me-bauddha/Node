"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var remove_1 = require("./remove/remove");
//server.ts file used to collaborate the custom file
//server.ts file is the main server file 
// node starts the execution from "server.ts" file
var app = express();
//enable cors policy
app.use(cors());
//set the MIME type 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//use the module
app.use("/fetch", fetch_1.default);
app.use("/insert", insert_1.default);
app.use("/update", update_1.default);
app.use("/remove", remove_1.default);
app.listen(8080, function () {
    console.log("Server Started ....");
});

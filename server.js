"use strict";
//to encapsulate the module 
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", accounts_1.default);
app.listen(8080, function () {
    console.log("server started successfully");
});
//http://localhost:8080/module1 (default get request)
//http://localhost:8080/module1/cash  (get request)
//http://localhost:8080/module2 (default get request)
//http://localhost:8080/module2  (default post request)

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the express module 
var express = require("express");
//create the rest object
var app = express();
//app object used to develop the rest services
//Ex. GET,PUT,POST ,DELETE ,...
//get request 
app.get("/harsh", function (req, res) {
    res.status(200).json({ "message": "welcome to typescript with nodejs" });
});
app.listen(8080, function () {
    console.log("server started successfully !! ....");
});

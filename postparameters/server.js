"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//import body-parser module
// body-parser module used to read the post parameters
var bodyparser = require("body-parser");
//create the rest object 
var app = express();
//this rest object used to develop the rest services like - GET,POST,PUT,DELETE,...
//MIME TYPE -: the communication language between client and server |JSON
//set the MIME Type 
app.use(bodyparser.json());
//receive form data from client and parse it (extended data : username ,password).
app.use(bodyparser.urlencoded({ extended: false }));
//authorization code 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ message: "auth failed ...." });
    }
};
// next() : next function decides whether the authorization success or not ?.
// next() : judgement function
// generally authorization code present in the headers.
//post request
app.post("/login", [auth], function (req, res) {
    //authentication
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(201).json({ msg: "login success !! ..." });
    }
    else {
        res.status(401).json({ msg: "login failed !! ..." });
    }
});
// app.listen(8080,()=>{
//     console.log("Server Started !!! ...")
// }); 
app.listen(8008, function () {
    console.log("Server Started !!! ...");
});

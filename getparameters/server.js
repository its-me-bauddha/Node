"use strict";
//http://localhost:8008/login?uname=admin&upwd=admin
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//rest services
var app = express();
//authorization  -> before  authentication 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//default request 
app.get("/", function (req, res) {
    res.sendFile("/Users/apple/Desktop/JS Node/getparameters/index.html");
});
// get request
app.get("/login", [auth], function (req, res) {
    //authentication 
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ message: "login success" });
    }
    else {
        res.status(401).json({ message: "login failed" });
    }
});
app.listen(8008, function () {
    console.log("Server started !! ...");
});

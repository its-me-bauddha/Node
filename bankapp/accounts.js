"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express
var express = require("express");
//create module 
var accounts = express.Router();
//create the  get request 
accounts.get("/", function (req, res) {
    res.status(200).json({ msg: "Welcome to the accounts module !!.." });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.send(200).json({ msg: "Login success...." });
    }
    else {
        res.send(400).json({ msg: "Login Failed ...." });
    }
});
//export the module
exports.default = accounts;

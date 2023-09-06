"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "abc123") {
        next();
    }
    else {
        res.status(400).json({ msg1: "auth1 Failed !!.." });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "hello") {
        next();
    }
    else {
        res.status(400).json({ msg2: "auth2 Failed !!.." });
    }
};
transactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ "msg": "welcome to transaction module" });
});
exports.default = transactions;

"use strict";
//create the submodule
Object.defineProperty(exports, "__esModule", { value: true });
//import module
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({
        message: "transaction soon!!..",
        Name: "Transaction SBI Bank"
    });
});
transactions.get("/cash", function (req, res) {
    res.status(200).json({
        message: "Welcome to cash get request",
        Name: "Cashier will give the amount that you have needed."
    });
});
//export the transactions module
exports.default = transactions;

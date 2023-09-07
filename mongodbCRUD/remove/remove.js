"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var remove = express.Router().delete("/", function (req, res) {
    ashokIT.connect("mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokeit_nodejs");
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ msg: "Record deleted ...." });
                }
            });
        }
    });
});
exports.default = remove;

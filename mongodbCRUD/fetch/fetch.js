"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import express module ,used to develop the rest services .
// import mongodb module , it is used to connect to mongodb database
var mongodb = require("mongodb");
// create the client , because it follows the client server architecture.
var ashokit = mongodb.MongoClient;
// newClient is the client
// create the module
var fetch = express.Router().get("/", function (req, res) {
    ashokit.connect("mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err) {
            throw err;
        }
        else {
            var db = connection.db("ashokeit_nodejs");
            db.collection("products")
                .find()
                .toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//export the module
exports.default = fetch;

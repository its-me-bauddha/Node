"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
//create the client
var ashokeIT = mongodb.MongoClient;
//create the module
var insert = express.Router().post("/", function (req, res) {
    // connect with client
    ashokeIT.connect("mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            //connection object
            var db = connection.db("ashokeit_nodejs");
            //insert the record
            db.collection("product").insertOne({
                "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                " image": req.body.image,
            }, function (err, result) {
                if (err)
                    throw err;
                else {
                    //response send
                    res.send({ message: "record inserted successfully !! ..." });
                }
            });
        }
    });
});
exports.default = insert;

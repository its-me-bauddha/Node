"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var ashokeIT = mongodb.MongoClient;
var update = express.Router().put("/", function (req, res) {
    ashokeIT.connect("mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokeit_nodejs");
            db.connection("products").updateOne({ "id": req.body.id }, { $set: { " price": req.body.price, "quantity": req.body.quantity } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated successfully !! .." });
                }
            });
        }
    });
});
exports.default = update;

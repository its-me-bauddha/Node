"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
//import the module
//create the rest object
var app = express();
//enable the cors policy
app.use(cors());
//set the json as MIME type
app.use(bodyparser.json());
//parse the client data
app.use(bodyparser.urlencoded({ extended: false }));
//connect to database
mongoose.connect("\/");
//define and initialize  the schema 
var Schema = mongoose.Schema;
//initialize the schema
var employeeSchema = new Schema({
    e_id: Number,
    e_name: String,
    e_sal: Number
});
//apply above schema to databse by using mongoose
var Model = mongoose.Model;
var Employee = Model("Employee", employeeSchema);
//create the rest api 
app.post("/employee", function (req, res) {
    var newRecord = new Employee({
        e_id: req.body.e_id,
        e_name: req.body.e_name,
        e_sal: req.body.e_sal
    });
    newRecord.save(function (err, result) {
        if (err)
            throw err;
        else {
            res.status(200).json({ insert: "success" });
        }
    });
});
app.listen(8080, function () {
    console.log("server started ....  !!!");
});

"use strict";
// Read get parameters in express js
Object.defineProperty(exports, "__esModule", { value: true });
// //import
// import * as express from 'express';
// //create rest object
// let app:any =express();
// // get request
// app.get("/sample/user/:uname/pwd/:upwd",(req:any,res:any):any=>{
//          if(req.param.uname === "ashokit" && req.param.uname === "ashokit") {
//             res.send({login :"success !!...."});
//          }
//          else{
//             res.send({login:"Failed !!...."});
//          }
// });
// app.listen(8080,()=>{
//     console.log("Server started  !! .....")
// });
//url 
//http://localhost:8080/login/uname/admin/upwd/admin
//http://localhost:8080/login/user/ashokit/pwd/ashokit
//  
// import * as express from "express";
// let app :any = express();  
// app.get("/login/uname/:uname/upwd/:upwd",(req:any,res:any):any=>{
//     if(req.params.uname === "admin" && req.params.upwd ==="admin"){
//         res.status(200).json({
//             login:"success"
//         });
//     }
//     else{
//         res.status(401).json(
//             {
//                 login:"Fail...."
//             }
//         )
//     }
// });
// app.listen(8080,()=>{
//     console.log("server started successfully at port no 8080");
// })
// http://localhost:8080/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({
            message: "login success !!! ..... admin ji"
        });
    }
    else {
        res.status(401).json({
            message: "Login failed !!! ..... admin ji"
        });
    }
});
app.listen(8080, function () {
    console.log("Server started at port no 8080 admin ji");
});

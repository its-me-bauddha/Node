//import express
import * as express from "express";

//create module 
let accounts:any  = express.Router();
  
//create the  get request 
accounts.get("/",(req:any,res:any):any=>{
        res.status(200).json({msg :"Welcome to the accounts module !!.."});

});

accounts.get("/login",(req:any,res:any):any=>{
        if(req.query.uname === "admin" && req.query.upwd === "admin"){
            res.send(200).json({msg:"Login success...."});
        }
        else{
            res.send(400).json({msg:"Login Failed ...."});
        }
});

//export the module
export default accounts;
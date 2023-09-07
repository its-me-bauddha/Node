//http://localhost:8008/login?uname=admin&upwd=admin


//import express  module
import * as express from "express";

//rest services
let app:any = express();

//authorization  -> before  authentication 
let auth = (req:any,res:any,next:any):any =>{
        let allHeaders = req.headers;
        if(allHeaders.token === "ashokIT"){
            next(); 
        }else{
            res.status(500).json({auth:"fail"})
        }
};

//default request 

app.get("/",(req:any,res:any):any=>{
        res.sendFile("/Users/apple/Desktop/JS Node/getparameters/index.html"); 
});


// get request
app.get("/login",[auth],(req:any,res:any):any=>{
    //authentication 
        if(req.query.uname === "admin" && req.query.upwd === "admin"){
            res.status(200).json({message:"login success"})
        }
        else{
            res.status(401).json({message:"login failed"})
        }
});

app.listen(8008,()=>{
    console.log("Server started !! ...");
});
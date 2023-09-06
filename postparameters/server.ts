
//import express module
import * as express from 'express';

//import body-parser module
// body-parser module used to read the post parameters

import * as bodyparser from "body-parser";


//create the rest object 
let app:any = express();  
//this rest object used to develop the rest services like - GET,POST,PUT,DELETE,...

//MIME TYPE -: the communication language between client and server |JSON

//set the MIME Type 
app.use(bodyparser.json());


//receive form data from client and parse it (extended data : username ,password).
app.use(bodyparser.urlencoded({extended:false}));

//authorization code 
let auth:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let token:any=allHeaders.token;
    if(token === "nodejs"){
        next();
    }
    else{
        res.status(401).json({message : "auth failed ...."})
    }
};
// next() : next function decides whether the authorization success or not ?.
// next() : judgement function
// generally authorization code present in the headers.



//post request
app.post("/login" ,[auth],(req:any,res:any):any=>{
    //authentication
        if(req.body.uname === "admin" && req.body.upwd === "admin"){
            res.status(201).json({msg :"login success !! ..."});
        }
        else{
            res.status(401).json({msg:"login failed !! ..."});
        }
});


// app.listen(8080,()=>{
//     console.log("Server Started !!! ...")
// }); 

app.listen(8008,()=>{
    console.log("Server Started !!! ...");
});






//import the express module 
import * as express  from "express";

//create the rest object
let app:any = express();

//app object used to develop the rest services
//Ex. GET,PUT,POST ,DELETE ,...

//get request 

app.get("/harsh" ,(req:any,res:any):any=>{
        res.status(200).json({"message" :"welcome to typescript with nodejs"})
});

app.listen(8080,()=>{
    console.log("server started successfully !! ....")
})



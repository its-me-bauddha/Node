//to encapsulate the module 


import * as express from "express";
import transactions from  "./transactions";
import accounts from "./accounts";


let app :any = express();

app.use("/module1", transactions);
app.use("/module2",accounts);

app.listen(8080,()=>{
    console.log("server started successfully");
})




//http://localhost:8080/module1 (default get request)
//http://localhost:8080/module1/cash  (get request)

//http://localhost:8080/module2 (default get request)
//http://localhost:8080/module2  (default post request)




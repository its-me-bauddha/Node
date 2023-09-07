//create the submodule

//import module
import * as express from "express";  


let transactions:any = express.Router();

transactions.get("/" ,(req:any,res:any):any =>{
    res.status(200).json({
        message : "transaction soon!!..",
        Name :"Transaction SBI Bank"
    });
});

transactions.get("/cash" ,(req:any,res:any):any=>{
        res.status(200).json(
            {
                message:"Welcome to cash get request",
                Name :"Cashier will give the amount that you have needed."
            }
        );
});





//export the transactions module
export default transactions;
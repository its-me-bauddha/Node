import * as express from "express";
import * as mongodb from 'mongodb';

let ashokIT:any = mongodb.MongoClient;

let remove:any = express.Router().delete("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority",
    (err:any,connection:any):any=>{
            if(err) throw err;
            else{
              let db :any =connection.db("ashokeit_nodejs");

              db.collection("products").deleteOne({"id" : req.body.id},(err:any,res:any):any=>{
                    if(err) throw err;
                    else{
                        res.status(200).json({msg :"Record deleted ...."});
                    }
              });
            }
    })
})



export default remove;
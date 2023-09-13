import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
//import the module


//create the rest object
let app :any = express ();

//enable the cors policy
app.use(cors());

//set the json as MIME type
app.use(bodyparser.json());

//parse the client data
app.use(bodyparser.urlencoded({extended:false}));

//connect to database
mongoose.connect("/");

//define and initialize  the schema 
const Schema = mongoose.Schema;

//initialize the schema
const employeeSchema = new Schema({
    e_id:Number,
    e_name:String,
    e_sal:Number
});


//apply above schema to databse by using mongoose
const Model:any = mongoose.Model;
const Employee = Model("Employee",employeeSchema);

//create the rest api 
app.post("/employee" ,(req:any,res:any):any=>{
   const newRecord =  new Employee({
        e_id:req.body.e_id,
        e_name:req.body.e_name,
        e_sal:req.body.e_sal
    });

    newRecord.save((err:any ,result:any):any=>{
            if(err) throw err;
            else{
                res.status(200).json({insert:"success"});
            }
    });
});

app.listen(8080,()=>{
    console.log("server started ....  !!!")
})


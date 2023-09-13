import * as express from "express";
import * as mongodb from "mongodb";

//create the client
let ashokeIT: any = mongodb.MongoClient;

//create the module
let insert: any = express.Router().post("/", (req: any, res: any): any => {
  // connect with client
  ashokeIT.connect(
    "",
    (err: any, connection: any): any => {
      if (err) throw err;
      else {
        //connection object
        let db = connection.db("ashokeit_nodejs");
        //insert the record
        db.collection("product").insertOne(
          {
            "id": req.body.id,
            "name": req.body.name,
            "quantity": req.body.quantity,
            "price": req.body.price,
            "category": req.body.category,
           " image": req.body.image,
          },
          (err: any, result: any): any => {
            if (err) throw err;
            else {
              //response send
              res.send({ message: "record inserted successfully !! ..." });
            }
          }
        );
      }
    }
  );
});

export default insert;

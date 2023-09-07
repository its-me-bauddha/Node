import * as express from "express";
import * as mongodb from "mongodb";

let ashokeIT: any = mongodb.MongoClient;

let update: any = express.Router().put("/", (req: any, res: any): any => {
  ashokeIT.connect(
    "mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority",
    (err: any, connection: any): any => {
      if (err) throw err;
      else {
        let db = connection.db("ashokeit_nodejs");
        db.connection("products").updateOne(
          { "id": req.body.id },
          { $set: { " price": req.body.price, "quantity": req.body.quantity } },
          (err: any, result: any): any => {
            if (err) throw err;
            else {
              res.send({ message: "record updated successfully !! .." });
            }
          }
        );
      }
    }
  );
});


export default update;

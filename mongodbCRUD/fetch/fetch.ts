import * as express from "express";
// import express module ,used to develop the rest services .

// import mongodb module , it is used to connect to mongodb database
import * as mongodb from "mongodb";

// create the client , because it follows the client server architecture.
let ashokit: any = mongodb.MongoClient;
// newClient is the client

// create the module
let fetch: any = express.Router().get("/", (req: any, res: any): any => {
  ashokit.connect(
    "mongodb+srv://harshbauddha563:H@rshu1277@cluster0.chs95he.mongodb.net/?retryWrites=true&w=majority",
    (err: any, connection: any):any=> {
      if (err) {
        throw err;
      } else {
        let db: any = connection.db("ashokeit_nodejs");
        db.collection("products")
          .find()
          .toArray((err:any, array:any[]):any => {
            if (err) throw err;
            else {
              res.send(array);
            }
          });
      }
    }
  );
});

//export the module
export default fetch;

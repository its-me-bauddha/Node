let http = require("http");

let server = http.createServer((req,res)=>{
    res.write(` <h1> Welcome !!! to http Server </h1>`);
});

server.listen(8008);
console.log("http server started at port 8008 successfully");

let http = require("http");


let url = require("url");


//create the http server
let server = http.createServer((req,res)=>{
        //set MIME Type
        //communication language between client and server called as MIME

        res.writeHead(200 ,{'Content-type' : 'text/html'});

        //parse the request 
       let obj =  url.parse(req.url,true).query;

       if(obj.uname === "harsh" && obj.upwd === "harsh"){
                res.write("Login Success");
       }
       else{
        res.write('login failed')
       }
       res.end();


});

server.listen(8088);
console.log("Server started at port no . 8088 ");
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
      console.log(req.url);
      if(req.url=="/"){
            res.write("hellow from home page");
            res.end();
      }
      else if(req.url=="/about")
      {
            res.end("hellow from about page");
      }
      else if(req.url=="/contact")
      {
            res.end("hellow from contact page");
      }
      else if(req.url=="/userAPI")
      {
          fs.readFile("userAPI.json","utf-8",(err,data)=>{
              console.log(JSON.parse(data));
              res.end(data);
          })
            // res.end("hellow from userAPI page");
            
      }
      else{
            res.writeHead(404,{"Content-type":"tetx/html"});
            res.end("<h1>404 error page.page not found.</h1>");
      }
//      res.end("hello from other sides.");
});

server.listen(3000,'127.0.0.1',()=>{
      console.log("listening to the port 3000");
});
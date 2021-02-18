const http=require('http');

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
      else{
            res.writeHead(404,{"Content-type":"tetx/html"});
            res.end("<h1>404 error page.page not found.</h1>");
      }
//      res.end("hello from other sides.");
});

server.listen(8001,'127.0.0.1',()=>{
      console.log("listening to the port 8000");
});
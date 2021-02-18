const fs=require("fs");
const http = require("http");
const server=http.createServer();

server.on("request",(req,res)=>{

    // 1st method

    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });


    // 2nd method

    // const rstream=fs.createReadStream("input.txt");
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on("error",()=>{
    //     console.log(error);
    //     res.end();
    // });


    //3rd method

    const rstream=fs.createReadStream("input.txt");
    rstream.pipe(res);


});

server.listen(8000,"127.0.0.1");

var requests=require("requests");
const http = require("http");
const fs=require('fs');

const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal,orgVal)=>{
    let x= tempVal.replace("{%tempval%}",orgVal.main.temp);
    x= x.replace("{%tempval%}",orgVal.main.temp);
    x= x.replace("{%tempmin%}",orgVal.main.temp_min);
    x= x.replace("{%tempmax%}",orgVal.main.temp_max);
    x= x.replace("{%location%}",orgVal.name);
    x= x.replace("{%country%}",orgVal.sys.country);
    x= x.replace("{%tempstatus%}",orgVal.weather[0].main);
    
    return x;
}

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=75d8c5323de88acbac6a5ed707d19141')
        .on('data',  (chunk) =>{
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            // console.log(arrData[0].main.temp);
            const realTimeData=arrData.map((val)=>replaceVal(homeFile,val)).join("");
            res.write(realTimeData);
        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
         res.end();
        });
    }

});

server.listen(8000,'127.0.0.1');
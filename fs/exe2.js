const fs = require('fs') ;

// fs.writeFile("bio.txt","hello this is shashwat",(err) => {
//     console.log("file created");
// });

// fs.appendFile("bio.txt"," hello this is updated another task",()=>{
//     console.log("file updated");
// });

// fs.readFile('bio.txt','utf-8',(err,data)=>{
//     console.log(data);
// });



// fs.rename('bio.txt','bio2.txt',(err)=>{
//     console.log("file name changed");
// });

fs.unlink('bio2.txt',(err)=>{
    console.log("file deleted");
});

fs.rmdir("fs",(err)=>{
    console.log("folder deleted");
});
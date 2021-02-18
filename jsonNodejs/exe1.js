const fs=require("fs");
const bioData={
    name: "Shashwat Vashimkar",
    age: 24,
    contact: 9838341202
};

const jsonData=JSON.stringify(bioData);

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
});

fs.readFile("json1.json","UTF-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
})

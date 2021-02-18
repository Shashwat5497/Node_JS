const EventEmitter=require("events");

const event=new EventEmitter();

// event.on("sayMyName",()=>{
//     console.log("My name is Shashwat");
// });
// event.on("sayMyName",()=>{
//     console.log("My name is Vashimkar.");
// });
// event.on("sayMyName",()=>{
//     console.log("My name is Shashwat Vashimkar.");
// });
// event.emit("sayMyName");

event.on("checkPage",(sc,msg)=>{
    console.log(`the status code is ${sc} and msg is ${msg}`);
});
event.emit("checkPage",200,"ok");
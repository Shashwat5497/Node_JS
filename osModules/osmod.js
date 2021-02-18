const os= require('os')

console.log(os.arch());
console.log(os.freemem()/1024/1024/1024);
console.log(os.cpus());
console.log(os.totalmem());
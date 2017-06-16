var fs = require('fs');
console.log("get a file");
console.log(process.cwd())
var file = fs.readFileSync('./readFileSync.js');
console.log("got a file");

console.log("continue");

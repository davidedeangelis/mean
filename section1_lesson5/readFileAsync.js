var fs = require('fs');

var onFileLoad = function(err, file) {
  console.log("got the file");
}

console.log("get a file");

fs.readFile('readFileSync.js', onFileLoad);

console.log("continue");

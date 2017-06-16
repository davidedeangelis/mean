//spawn another node thread for multi threading non blocking the app
var child_process = require('child_process');

console.log("1");

var newProcess = child_process.spawn('node', ['./section1_lesson5/_fibonacci.js'], {
    stdio : 'inherit'
  }
);

console.log("2");

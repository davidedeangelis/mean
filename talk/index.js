//private var not exposed in line 12
var filename = "index.js";

var hello = function(name){
  console.log("Hello " + name);
}

var intro = function(){
  console.log("im " + filename);
}

//exposing public access to these functions multiple list
module.exports = {
  hello : hello,
  intro : intro
  //filename : filename add here to expose the var
}

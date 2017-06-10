//private var
var answer = "good question!";

//expose public qith module exports
module.exports.ask = function(question){
  console.log(question);
  return answer;
}

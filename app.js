require ("./instantHello");
var goodbye = require("./talk/goodbye");
var talk = require("./talk");
var questions = require("./talk/questions");

talk.intro();
talk.hello("davide");
var answer = questions.ask("question?");
console.log(answer);
goodbye();

//import express
var express = require('express');
//import path
var path = require('path');
//import the routes js
var routes = require('./api/routes');
//import parser
var bodyParser = require('body-parser');

//callback list function express server app
var listenCallback = function() {
	var port = server.address().port;
	console.log('Express open for business localhost:' + port);
}

//callback function for file
var reqResFileCallback = function(req, res) {
	console.log('GET THE HOMEPAGE');
	res.status(200);
	res.sendFile(path.join(__dirname, 'app.js'));
}

//express middleware callback positional
var middlewareCallback = function(req, res, next) {
	console.log(req.method, req.url);
	next();
}


//EXPRESS APP

//create express app
var app = express();
//set port
app.set('port', 3000);

//log all request GET
app.use(middlewareCallback);

//set static path
app.use(express.static(path.join(__dirname, 'public')));//set context root

app.use(bodyParser.urlencoded({extended:false}));

//set routes
app.use('/api', routes);

app.get('/file', reqResFileCallback);

var server = app.listen(app.get('port'), listenCallback);

console.log('continue..');
var express = require('express');
var app = express();
var path = require('path');

//callback list function express server app
var listenCallback = function() {
	var port = server.address().port;
	console.log('Express open for business localhost:' + port);
}

//callback function for html
//var reqResCallback = function(req, res) {
//	console.log('GET THE HOMEPAGE');
//	res.status(200);
//	res.sendFile(path.join(__dirname, 'public', 'index.html'));
//}

//callback function for json
var reqResJsonCallback = function(req, res) {
	console.log('GET THE HOMEPAGE');
	res.status(200);
	res.json({"jsonData" : true});
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

app.set('port', 3000);

//log all request GET
app.use(middlewareCallback);

app.use(express.static(path.join(__dirname, 'public')));//set context root

//app.get('/public', reqResCallback);

app.get('/json', reqResJsonCallback);

app.get('/file', reqResFileCallback);

var server = app.listen(app.get('port'), listenCallback);

console.log('continue..');
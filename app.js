var express = require('express');

var app = express();

var listenCallback = function() {
	var port = server.address().port;
	console.log('Express open for business localhost:' + port);
}

app.set('port', 3000);

var server = app.listen(app.get('port'), listenCallback);


console.log('continue..');
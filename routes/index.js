//ROUTES
var express = require('express');
var router = express.Router();

//callback function for json GET
var getJson = function(req, res) {
	console.log('GET THE JSON');
	res.status(200);
	res.json({"jsonData" : true});
}

//callback function for json POST
var postJson = function(req, res) {
	console.log('POST THE JSON');
	res.status(200);
	res.json({"jsonData" : "POST RECEIVED"});
}

//define route for /json path
router.route('/json').get(getJson).post(postJson);

//public access
module.exports = router;
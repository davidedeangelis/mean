var dbConn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');
var ObjectId = require('mongodb').ObjectId;
//GET CONTROLLER
var hotelsGetAll = function(req, res) {
	var db = dbConn.get();
	console.log('DB', db);
	var collection = db.collection('hotels');
	
	var offset = 0;
	var count = 5;
	
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset, 10);
	}
	//check param existence and parse to int
	if(req.query && req.query.count){
		count = parseInt(req.query.count, 10);
	}
	
	collection.find().skip(offset).limit(count).toArray(function(err, docs){
		console.log("Doud hotels", docs);
		res.status(200).json(docs);
	});
}

var hotelsGetOne = function(req, res) {
	var db = dbConn.get();
	var collection = db.collection('hotels');
	var hotelId = req.params.hotelId;
	
	collection.findOne({
		_id : ObjectId(hotelId)
	}, function(err, doc){
		console.log('GET THE HOTEL ID: ', hotelId);
		res.status(200);
		res.json(doc);
	});
	
}

var hotelsAddOne = function(req, res) {
	var hotelId = req.params.hotelId;
	console.log('POST NEW HOTEL', hotelId);
	console.log(req.body);
	res.status(200);
	res.json(req.body);
}



//make it public? mha...
module.exports = {
		hotelsGetAll : hotelsGetAll,
		hotelsGetOne : hotelsGetOne,
		hotelsAddOne : hotelsAddOne
}
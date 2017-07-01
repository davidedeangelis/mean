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
	var db = dbConn.get();
	var collection = db.collection('hotels');
	var newHotel;
	console.log('POST NEW HOTEL');
	
	if (req.body && req.body.name && req.body.stars) {
		newHotel = req.body;
		newHotel.stars = parseInt(req.body.stars, 10);
		collection.insertOne(newHotel, function(err, response){
			console.log(response.ops);
			res.status(201);
			res.json(response);
		});
	} else {
		console.log("Data Missing from Body");
		res.status(400);
		res.json({message : "Request data missing from Body"});
	}
}



//make it public? mha...
module.exports = {
		hotelsGetAll : hotelsGetAll,
		hotelsGetOne : hotelsGetOne,
		hotelsAddOne : hotelsAddOne
}
var mongoose = require('mongoose');

//GET CONTROLLER
var hotelsGetAll = function(req, res) {
//	var models = mongoose.modelNames()
//	console.log("MODELS: ", models);
	var Hotel = mongoose.model('Hotel');
	
	var offset = 0;
	var count = 5;
	
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset, 10);
	}
	//check param existence and parse to int
	if(req.query && req.query.count){
		count = parseInt(req.query.count, 10);
	}
	
	Hotel.find().skip(offset).limit(count).exec(function(err, hotels){
		console.log('FOUND HOTELS', hotels.length);
		res.json(hotels);
	});
}

var hotelsGetOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var Hotel = mongoose.model('Hotel');
	console.log('HOTEL ID: ', hotelId);
	
	Hotel.findById(hotelId).exec(function(err, doc){
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
		console.log('DATA MISSING FROM BODY');
		res.status(400);
		res.json({message : 'REQUEST DATA MISSING FROM BODY'});
	}
}



//make it public? mha...
module.exports = {
		hotelsGetAll : hotelsGetAll,
		hotelsGetOne : hotelsGetOne,
		hotelsAddOne : hotelsAddOne
}
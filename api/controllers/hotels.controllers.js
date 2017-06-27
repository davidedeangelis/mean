var dbConn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');

//GET CONTROLLER
var hotelsGetAll = function(req, res) {
	var db = dbConn.get();
	console.log('DB', db);
	
	console.log('GET THE HOTELS');
	var offset = 0;
	var count = 5;
	
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset, 10);
	}
	//check param existence and parse to int
	if(req.query && req.query.count){
		count = parseInt(req.query.count, 10);
	}
	
	var returnData = hotelData.slice(offset, offset+count);
	res.status(200);
	res.json(returnData);
}

var hotelsGetOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var thisHotel = hotelData[hotelId];
	console.log('GET THE HOTEL ID: ', hotelId);
	res.status(200);
	res.json(thisHotel);
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
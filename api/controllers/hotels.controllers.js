var hotelData = require('../data/hotel-data.json');

//GET CONTROLLER
var hotelsGetAll = function(req, res) {
	console.log('GET THE HOTELS');
	res.status(200);
	res.json(hotelData);
}

var hotelsGetOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var thisHotel = hotelData[hotelId];
	console.log('GET THE HOTEL ID: ', hotelId);
	res.status(200);
	res.json(thisHotel);
}

//make it public? mha...
module.exports = {
		hotelsGetAll : hotelsGetAll,
		hotelsGetOne : hotelsGetOne
}
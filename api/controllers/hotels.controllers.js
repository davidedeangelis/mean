var hotelData = require('../data/hotel-data.json');

//GET CONTROLLER
var hotelsGetAll = function(req, res) {
	console.log('GET THE HOTELS');
	res.status(200);
	res.json(hotelData);
}

//make it public? mha...
module.exports = {
		hotelsGetAll : hotelsGetAll
}
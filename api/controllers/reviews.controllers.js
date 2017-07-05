var mongoose = require('mongoose');
	
var reviewsGetAll = function(req, res){
	console.log('GET ALL REVIEWS');
	var hotelId = req.params.hotelId;
	var Hotel = mongoose.model('Hotel');
	console.log('HOTEL ID: ', hotelId);
	
	Hotel.findById(hotelId).select('reviews').exec(function(err, doc){
		res.status(200);
		res.json(doc.reviews);
	});
};

var reviewsGetOne = function(req, res){
	console.log('GET ONE REVIEW');
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;
	var Hotel = mongoose.model('Hotel');
	console.log('HOTEL ID: ', hotelId);
	console.log('REVIEW ID: ', reviewId);
	
	Hotel.findById(hotelId).exec(function(err, hotel){
		var review = hotel.reviews.id(reviewId);
		res.status(200);
		res.json(review);
	});
};

module.exports = {
		reviewsGetAll : reviewsGetAll,
		reviewsGetOne : reviewsGetOne
}
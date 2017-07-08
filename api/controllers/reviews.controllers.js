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


var _addReview = function(req, res, hotel){

	hotel.reviews.push({
		name : req.body.name,
		rating : parseInt(req.body.rating),
		review : req.body.review
	});
	hotel.save(function(err, hotelUpdated){
		if (err) {
			res
			.status(200)
			.json(err);
		} else {
			res
			.status(201)
			.json(hotelUpdated.reviews[hotelUpdated.reviews.length - 1]);
		}
	});
};

var reviewsAddOne = function(req, res){
	var hotelId = req.params.hotelId;
	var Hotel = mongoose.model('Hotel');
	console.log('HOTEL ID: ', hotelId);

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec(function(err, hotel) {
		var response = {
				status : 200,
				message : []
		};
		if (err) {
			console.log("Error finding hotel");
			response.status = 500;
			response.message = err;
		} else if(!hotel) {
			console.log("Hotel id not found in database", id);
			response.status = 404;
			response.message = {
					"message" : "Hotel ID not found " + id
			};
		}

		if (hotel) {
			_addReview(req, res, hotel);
		} else {
			res
			.status(response.status)
			.json(response.message);
		}
	});
};

var reviewsUpdateOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;
	console.log('PUT reviewId ' + reviewId + ' for hotelId ' + hotelId);

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec(function(err, hotel) {
		var thisReview;
		var response = {
				status : 200,
				message : {}
		};
		if (err) {
			console.log("Error finding hotel");
			response.status = 500;
			response.message = err;
		} else if(!hotel) {
			console.log("Hotel id not found in database", id);
			response.status = 404;
			response.message = {
					"message" : "Hotel ID not found " + id
			};
		} else {
			// Get the review
			thisReview = hotel.reviews.id(reviewId);
			// If the review doesn't exist Mongoose returns null
			if (!thisReview) {
				response.status = 404;
				response.message = {
						"message" : "Review ID not found " + reviewId
				};
			}
		}
		if (response.status !== 200) {
			res
			.status(response.status)
			.json(response.message);
		} else {
			thisReview.name = req.body.name;
			thisReview.rating = parseInt(req.body.rating, 10);
			thisReview.review = req.body.review;
			hotel.save(function(err, hotelUpdated) {
				if (err) {
					res
					.status(500)
					.json(err);
				} else {
					res
					.status(204)
					.json();
				}
			});
		}
	});
};

var reviewsDeleteOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;
	console.log('PUT reviewId ' + reviewId + ' for hotelId ' + hotelId);

	Hotel
	.findById(hotelId)
	.select('reviews')
	.exec(function(err, hotel) {
		var thisReview;
		var response = {
				status : 200,
				message : {}
		};
		if (err) {
			console.log("Error finding hotel");
			response.status = 500;
			response.message = err;
		} else if(!hotel) {
			console.log("Hotel id not found in database", id);
			response.status = 404;
			response.message = {
					"message" : "Hotel ID not found " + id
			};
		} else {
			// Get the review
			thisReview = hotel.reviews.id(reviewId);
			// If the review doesn't exist Mongoose returns null
			if (!thisReview) {
				response.status = 404;
				response.message = {
						"message" : "Review ID not found " + reviewId
				};
			}
		}
		if (response.status !== 200) {
			res
			.status(response.status)
			.json(response.message);
		} else {
			hotel.reviews.id(reviewId).remove();
			hotel.save(function(err, hotelUpdated) {
				if (err) {
					res
					.status(500)
					.json(err);
				} else {
					res
					.status(204)
					.json();
				}
			});
		}
	});

};

module.exports = {
		reviewsGetAll : reviewsGetAll,
		reviewsGetOne : reviewsGetOne,
		reviewsAddOne : reviewsAddOne,
		reviewsUpdateOne : reviewsUpdateOne,
		reviewsDeleteOne : reviewsDeleteOne
}
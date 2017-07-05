//ROUTES
var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

//define route for /json path
router.route('/hotels').get(ctrlHotels.hotelsGetAll);
//GET
router.route('/hotels/:hotelId').get(ctrlHotels.hotelsGetOne);
//POST FORM
router.route('/hotels/new').post(ctrlHotels.hotelsAddOne);

//REVIEWS ROUTES
//define route for /json path
router.route('/hotels/:hotelId/reviews').get(ctrlReviews.reviewsGetAll);
//GET
router.route('/hotels/:hotelId/reviews/:reviewId').get(ctrlReviews.reviewsGetOne);
//public access
module.exports = router;
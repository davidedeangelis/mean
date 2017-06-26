//ROUTES
var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');

//define route for /json path
router.route('/hotels').get(ctrlHotels.hotelsGetAll);
//GET
router.route('/hotels/:hotelId').get(ctrlHotels.hotelsGetOne);
//POST FORM
router.route('/hotels/new').post(ctrlHotels.hotelsAddOne);

//public access
module.exports = router;
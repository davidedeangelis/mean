//ROUTES
var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');

//define route for /json path
router.route('/hotels').get(ctrlHotels.hotelsGetAll);

//public access
module.exports = router;
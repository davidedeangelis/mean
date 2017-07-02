var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	rating: {
		type : Number,
		min : 0,
		max : 5,
		"default" : 0
	},
	review : {
		type : String,
		required : true
	},
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var roomSchema = new mongoose.Schema({
	type : String,
	number : Number,
	description : String,
	phots : [String],
	price : Number
});

var hotelSchema= new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	stars: {
		type : Number,
		min : 0,
		max : 5,
		"default" : 0
	},
    description : String,
    services : [String],
    photos : [String],
    currency : String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
    	address : String,
    	coordinates : {
    		//Longitude(EW), Latitude(NS)
       		type : [Number],
			index : '2dsphere'
    	}
	}
});
console.log('REGISTERING HOTEL MODEL');
mongoose.model('Hotel', hotelSchema);
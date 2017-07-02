var mongoose = require('mongoose');

var dbUrl = "mongodb://mean:Passw0rd!@cluster0-shard-00-00-vzgp2.mongodb.net:27017,cluster0-shard-00-01-vzgp2.mongodb.net:27017,cluster0-shard-00-02-vzgp2.mongodb.net:27017/meanhotel?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to: ' + dbUrl);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconneted to: ');
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected trough application termination(SIGINT)');
		process.exit(0);
	});
});

process.on('SIGTERM', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected trough application termination (SIGTERM)');
		process.exit(0);
	});
});

process.once('SIGUSR2', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected trough application termination (SIGUSR2)');
		process.kill(process.pid, 'SIGUSR2');
	});
});

//SCHEMA AND MODELS
require('./hotels.model.js');

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://mean:Passw0rd!@cluster0-shard-00-00-vzgp2.mongodb.net:27017,cluster0-shard-00-01-vzgp2.mongodb.net:27017,cluster0-shard-00-02-vzgp2.mongodb.net:27017/meanhotel?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var connection = null;

var open = function(){
	MongoClient.connect(uri, function(err, db) {
		if (err) {
			console.log("DB CONNECTION ERROR", err);
			return;
		} else {
			console.log("DB CONNECTION OPEN");  
			connection = db;  
		}
	});
}

var get = function(){
	return connection;
}

module.exports = {
		get : get,
		open : open
}

var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express();

var Auction = require('./model/auction.js'),
	User = require('./model/user.js'),
	Bid = require('./model/bid.js');

// var TestDB = require('testDB.js');

mongoose.connect("mongodb://localhost/Auction");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

// TestDB();

app.get('/AB', function(req, res){
	res.send(User);
	// User.find({}, function(err, user){
	// 	res.send();
	// 	console.log(user);
	// });
});

app.listen(3000, function(){
	console.log("Server Started");
});
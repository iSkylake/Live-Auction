var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express();

var Auction = require('./model/auction.js'),
	User = require('./model/user.js'),
	Bid = require('./model/bid/js');
	

mongoose.connect("mongodb://localhost/auction");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

auction

app.listen(3000, function(){
	console.log("Server Started");
});
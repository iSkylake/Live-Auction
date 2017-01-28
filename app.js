var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	app = express();

	// Bid = require('./model/bid.js');

// var TestDB = require('testDB.js');
require('./server/config/mongoose.js')

var routes = require('./server/config/routes.js')

app.use(express.static(path.join(__dirname, './client')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.use(routes);

// TestDB();


app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err)
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

app.use(express.static(path.join(__dirname, 'public')));



app.listen(3000, function(){
	console.log("Server Started");
});
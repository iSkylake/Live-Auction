var express = require('express'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	app = express(),
	hash = require('bcrypt-nodejs'),
	path = require('path'),
	passport = require('passport'),
	localStrategy = require('passport-local').Strategy;

	// Bid = require('./model/bid.js');

var User = require('./server/models/User.js');
require('./server/config/passport.js');
// var TestDB = require('testDB.js');
require('./server/config/mongoose.js')

var routes = require('./server/config/routes.js')

app.use(express.static(path.join(__dirname, './client')));
app.use(logger('dev'));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// TestDB();


app.use(function(req, res, next){
//	console.log(req)
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



var debug = require('debug')('passport-mongo');

app.listen(3000, function(){
	console.log("Server Started");
});
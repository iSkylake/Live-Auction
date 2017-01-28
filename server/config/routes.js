var express = require('express'),
	  mongoose = require('mongoose'),
	  routes = express.Router(),
	  User = mongoose.model('User'),
	  jwt = require('express-jwt'),

	  auth = jwt({
	    secret: 'MY_SECRET',
	    userProperty: 'payload'
	  }),
	  users = require('../controllers/users.js'),
  	  authentications = require('../controllers/authentications.js')

var routes = express.Router();

routes.post('/register', function(req, res) {
	console.log('calling')
	authentications.register(req, res)
})

routes.get('/test', function(req, res) {
	User.find({}, function(err, user) {
		res.send(user)
	})
})



module.exports = routes;
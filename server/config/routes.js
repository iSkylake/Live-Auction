var express = require('express'),
	  routes = express.Router(),
	  passport = require('passport'),
	  jwt = require('express-jwt'),

	  auth = jwt({
	    secret: 'MY_SECRET',
	    userProperty: 'payload'
	  }),
	  users = require('../controllers/users.js'),
  	  authentications = require('../controllers/authentications.js')

  	  User = require('../models/User.js')


routes.post('/register', function(req, res) {
	authentications.register(req, res)
})

routes.get('/test', function(req, res) {
	User.find({}, function(err, user) {
		res.send(user)
	})
})



module.exports = routes;
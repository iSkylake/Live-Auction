var express = require('express'),
mongoose = require('mongoose'),
  routes = express.Router(),
  User = mongoose.model('User'),
  users = require('../controllers/users.js');

var routes = express.Router();

routes.post('/addUser', function(req, res) {
	console.log('calling')
	users.create(req, res)
})

routes.get('/test', function(req, res) {
	User.find({}, function(err, user) {
		res.send(user)
	})
})



module.exports = routes;
var express = require('express'),
  routes = express.Router(),
  users = require('../controllers/users.js');

var routes = express.Router();

routes.post('/addUser', function(req, res) {
	console.log('calling')
	users.create(req, res)
})

routes.get('/test', function(req, res) {
	users.test(req, res)
})



module.exports = routes;
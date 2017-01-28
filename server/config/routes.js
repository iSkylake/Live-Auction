var express = require('express'),
	  routes = express.Router(),
	  passport = require('passport'),
	  jwt = require('express-jwt'),

	  auth = jwt({
	    secret: 'MY_SECRET',
	    userProperty: 'payload'
	  }),
	  users = require('../controllers/users.js'),
  	  authentications = require('../controllers/authentications.js'),

  	  User = require('../models/User.js'),
  	  Auction = require('../models/Auction.js'),
  	  Bid = require('../models/Bid.js');


routes.post('/register', function(req, res) {
	authentications.register(req, res)
})

routes.get('/test', function(req, res) {
	User.find({}, function(err, user) {
		res.send(user)
	})
})

routes.get('/:id', function(req, res){
	Auction.findById(req.params.id, function(err, auction){
		if(err){
			console.log(err);
		} else{
			res.send(auction);
		}
	});
});

routes.post('/:id/bid', function(req, res){
	Auction.findById(req.params.id,function(err, auction){
		if(err){
			console.log(err);
		} else{
			if(req.body.bid > auction.bid[auction.bid.length-1]){
				Auction.findById(req.params.id, function(err, auction){
					auction.bid.push(req.body.bid);
					auction.save();
				});
			}
			res.redirect('/'+auction._id);
		}
	});
});

// routes.post('/:id/bid', function(req, res){
// 	Auction.findById(req.params.id).populate("bids").exec(function(){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			if(req.body.bid > auction.bids[auction.bids.length-1].bid){
// 				Auction.findById(req.params.id, function(err, auction){
// 					auction.bids.push()
// 				});
// 			}	
// 		}
// 	});
// });

module.exports = routes;
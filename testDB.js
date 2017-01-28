var Auction = require('./model/auction.js'),
	User = require('./model/user.js'),
	Bid = require('./model/bid.js');

// Create User
var testDB = function(){
	var newUser = new User({email:"llorch@email.com", password:"password"});
	User.create(newUser, function(err, newUser){
		if(err){
			console.log(err);
		}
	});
}

module.exports = testDB;
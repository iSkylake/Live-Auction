var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = {};

users.test = function(req, res) {
	console.log(';here')
	User.find({}, function(err, user) {
		console.log(user)
		res.send(user)
	})
}


users.create = function(req, res) {
	var user = new User({name: 'Kyle'})
	user.save(function(err, result){
		if(err) {
			console.log(err)
		} else {
			res.json(result)
		}
	})
}



module.exports = users;
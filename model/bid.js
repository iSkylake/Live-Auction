var mongoose = require('mongoose');

var BidSchema = new mongoose.Schema({
	email: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	bid: Number
});

module.exports = mongoose.model("Bid", BidSchema);
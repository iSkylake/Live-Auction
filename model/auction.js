var mongoose = require("mongoose");

var AuctionSchema = new mongoose.Schema({
	name: String,
	description: String,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	bids: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Bid"
	}]
});

module.exports = mongoose.model("Auction", AuctionSchema);
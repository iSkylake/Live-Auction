var mongoose = require("mongoose");

var AuctionSchema = new mongoose.Schema({
	name: String,
	description: String,
	demo: Boolean,
	startTime: Date,
	endTime: Date,
	bidPrice: Number,
	minBid: Number,
	image: String,
	winner: String,
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
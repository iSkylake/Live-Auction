var mongoose = require('mongoose');

var auctionSchema = new mongoose.Schema({
	name: String,
	description: String,
	initialBid: Number,
	// bids: [
	// {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "Bid"
	// }
	// ],
	bids: [Number],
	image: String
});

module.exports = mongoose.model("Auction", auctionSchema);
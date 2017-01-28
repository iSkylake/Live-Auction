var mongoose = require('mongoose');

var bidSchema = new mongoose.Schema({
	bid: Number,
	user: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	}
});

module.exports = mongoose.model("Bid", bidSchema);
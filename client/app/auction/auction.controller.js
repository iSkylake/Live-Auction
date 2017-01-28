angular.module('myApp')
	.controller('AuctionCtrl as auctionCtrl', function($state) {
		var auctionCtrl = this;

		auctionCtrl.joinAuction = function() {
			$state.go('bid_spike');
		}



	});
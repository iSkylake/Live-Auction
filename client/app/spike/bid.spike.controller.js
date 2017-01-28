angular.module('myApp')
	.controller('BidCtrl', function($stateParams, $http) {
		var bidCtrl = this;

		// bidCtrl.setBid = 5;
		bidCtrl.maxBid = 10;

		bidCtrl.postBid = function(bid) {
			$http.post('/objectId', bid)
			.success(function(data) {
				console.log('successfully posted item', bid);
			})
			.error(function(error) {
				console.log('unable to post item', error);
			});
		}

		// bidSpikeCtrl.postBid(5);



	});
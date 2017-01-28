(function() {
	'use strict';
	angular.module('myApp').controller('AuctionController', ['$stateParams', AuctionController]);

	function AuctionController($stateParams) {
		console.log('hello');
		console.log($stateParams.item)
	}
})();
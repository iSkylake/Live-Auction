angular.module('myApp')
	.controller('BidCtrl', function($stateParams, $http, $interval, $timeout) {
		var bidCtrl = this;

		bidCtrl.setBid = '';
		bidCtrl.currentBid = 10;

		// bidCtrl.postBid = function(bid) {
		// 	$http.post('/objectId', bid)
		// 	.success(function(data) {
		// 		console.log('successfully posted item', bid);
		// 	})
		// 	.error(function(error) {
		// 		console.log('unable to post item', error);
		// 	});
		// }

		bidCtrl.postBid = function(bid) {
			$('#bidList').append('<div>George Yu: $25</div>');
			bidCtrl.currentBid = 25

			$timeout($('#winnerModal').modal({
        		show: 'true'
    		}),3000); 
		}

		$interval( function(){ $('#bidList').append('<div>Kyle Shin: $10</div>'); bidCtrl.currentBid = 10;}, 1000, true);
		$interval( function(){ $('#bidList').append('<div>Terry Lee: $12</div>'); bidCtrl.currentBid = 12;}, 10000, true);
		$interval( function(){ $('#bidList').append('<div>George Yu: $14</div>'); bidCtrl.currentBid = 14;}, 20000, true);
		$interval( function(){ $('#bidList').append('<div>Eric Eng: $20</div>'); bidCtrl.currentBid = 20;}, 30000, true);
		// $interval( function(){ $('#bidList').append('<div>George Yu: $20</div>'); }, 40000, true);


		bidCtrl.timer = 30;
 
	   var mytimeout = null; // the current timeoutID
	 
	    // actual timer method, counts down every second, stops on zero
	   bidCtrl.onTimeout = function() {
        if(bidCtrl.counter ===  0) {
            bidCtrl.$broadcast('timer-stopped', 0);
            $timeout.cancel(mytimeout);
            return;
        }
        bidCtrl.timer--;
        mytimeout = $timeout(bidCtrl.onTimeout, 1000);
	   };

	 
	   bidCtrl.startTimer = function() {
	      mytimeout = $timeout(bidCtrl.onTimeout, 1000);
	   };
	   bidCtrl.startTimer();

	});
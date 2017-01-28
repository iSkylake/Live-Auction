angular.module('myApp')
	.controller('MarketCtrl', function($stateParams, $state) {
		var marketCtrl = this;
		console.log("parameter", $stateParams);

		//////// DUMMY DATA //////////
		var item1 = {
			title: 'LiveH2H VR Headset',
			owner: 'George',
			image: '/images/vr.jpg',
			description: 'A simple to use, limited edition VR headset that lets you explore a variety of apps that unfold all around you.',
			startTime: '9am 1/28/2017'
		}

		var item2 = {
			title: 'Mider Watch',
			owner: 'George',
			image: '/images/watch.jpg',
			description: 'This timepiece features a gold leather band that is sure to catch anyones attention and a 47MM stainless steel case that brings it together.',
			startTime: '9am 1/28/2017'
		}

		var item3 = {
			title: 'Men\'s Pocket Watch',
			owner: 'George',
			image: '/images/pocketwatch.jpg',
			description: 'Stylish gold plated pocket watch. This quality timepiece features a 47.0mm case, black dial, rose-toned hands and easy-to-read markers.',
			startTime: '9am 1/28/2017'
		}

		var item4 = {
			title: 'Nikon DSLR Camera',
			owner: 'George',
			image: '/images/camera.jpg',
			description: 'This camera has a 30.4-megapixel full-frame CMOS sensor and a 100-32,000 ISO range that lets you take sharp photos.',
			startTime: '9am 1/28/2017'
		}

		var item5 = {
			title: 'Fedora Straw Hat',
			owner: 'George',
			image: '/images/hat.jpg',
			description: 'Top off your favorite outfits with our breezy Women\'s Merona Fedora Hat with Black Sash in Natural.',
			startTime: '9am 1/28/2017'
		}

		var item6 = {
			title: 'Michael Jordan Jersey',
			owner: 'George',
			image: '/images/jersey.jpg',
			description: 'High quality jersey, breathable and quick-dry. Embroidered stitched letters and numbers.',
			startTime: '9am 1/28/2017'
		}


		marketCtrl.dummyList = [];

		marketCtrl.dummyList.push(item1);
		marketCtrl.dummyList.push(item2);
		marketCtrl.dummyList.push(item3);
		marketCtrl.dummyList.push(item4);
		marketCtrl.dummyList.push(item5);
		marketCtrl.dummyList.push(item6);



		marketCtrl.itemList = [];
		marketCtrl.postAuction = function(title, description, image, startDate, startTime, auctionLength, startBid, minBid) {
			marketService.postItem(title, description, image, startDate, startTime, auctionLength, startBid, minBid)
				.then(function successCallback(response) {
					console.log('successfully posted item', response);
				}, function errorCallback(error) {
					console.log('failed to retrieve item', error);
				})
			$state.go('marketplace');
		}

		marketCtrl.getItems = function() {
			marketService.getItems()
				.then(function successCallback(response) {
					console.log('successfully retrieved item', response);
					marketCtrl.itemList = response;
				}, function errorCallback(error) {
					console.log('failed to retrieve item', error);
				});
		}

		// marketCtrl.getItems();

		marketCtrl.createAuction = function() {
			$state.go('create_auction');
		}

		marketCtrl.auctionTitle = 'hey';
		marketCtrl.auctionDescription = 'hey';
		marketCtrl.image ='hey';
		marketCtrl.auctionStartDate ='hey';
		marketCtrl.auctionStartTime = 'hey';
		marketCtrl.auctionLength = 'hey';
		marketCtrl.startBid = 'hey';
		marketCtrl.minBid = 'hey';



	});
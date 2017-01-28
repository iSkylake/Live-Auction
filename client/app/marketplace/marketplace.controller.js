angular.module('myApp')
	.controller('MarketCtrl', function($stateParams, $state) {
		var marketCtrl = this;
		console.log("parameter", $stateParams);

		//////// DUMMY DATA //////////
		var item1 = {
			title: 'LiveH2H VR Headset',
			owner: 'Kyle S.',
			image: '/images/vr.jpg',
			description: 'A simple to use, limited edition VR headset that lets you explore a variety of apps that unfold all around you.',
			startTime: '9:15 a.m. PST 1/29/2017'
		}

		var item2 = {
			title: 'Mider Watch',
			owner: 'Jordan E.',
			image: '/images/watch.jpg',
			description: 'This timepiece features a gold leather band that is sure to catch anyones attention and a luxurious 47MM stainless steel case.',
			startTime: '10:30 a.m. PST 1/30/2017'
		}

		var item3 = {
			title: 'Men\'s Pocket Watch',
			owner: 'Terry L.',
			image: '/images/pocketwatch.jpg',
			description: 'Stylish gold plated pocket watch. This quality timepiece features a 47.0mm case, black dial, rose-toned hands and easy-to-read markers.',
			startTime: '12:30 p.m. PST 2/2/2017'
		}

		var item4 = {
			title: 'Nikon DSLR Camera',
			owner: 'George Y.',
			image: '/images/camera.jpg',
			description: 'This camera has a 30.4-megapixel full-frame CMOS sensor and a 100-32,000 ISO range that lets you take sharp photos.',
			startTime: '9:15 a.m. PST 2/5/2017'
		}

		var item5 = {
			title: 'Fedora Straw Hat',
			owner: 'Albert C.',
			image: '/images/hat.jpg',
			description: 'Top off your favorite outfits with our breezy Women\'s Merona Fedora Hat with Black Sash in Natural.',
			startTime: '3:25 p.m. PST 2/5/2017'
		}

		var item6 = {
			title: 'Michael Jordan Jersey',
			owner: 'Javier A.',
			image: '/images/jersey.jpg',
			description: 'High quality jersey, breathable and quick-dry. Embroidered stitched letters and numbers.',
			startTime: '9:15 a.m. PST 2/10/2017'
		}

		var item7 = {
			title: 'Garmin FR230 GPS Watch',
			owner: 'Susan L.',
			image: '/images/garmin.jpg',
			description: 'Concise, easy-to-use charts, maps let you view your activities, track progress toward goals.',
			startTime: '8:00 a.m. PST 3/1/2017'
		}

		var item8 = {
			title: 'Apple iPad and iPhone',
			owner: 'Jim Y.',
			image: '/images/ipad.jpg',
			description: 'The Apple iPad Pro Tablet sports a 9.7-inch retina display with a high resolution and True Tone display.',
			startTime: '4:30 a.m. PST 3/15/2017'
		}


		marketCtrl.dummyList = [];

		marketCtrl.dummyList.push(item1);
		marketCtrl.dummyList.push(item2);
		marketCtrl.dummyList.push(item3);
		marketCtrl.dummyList.push(item4);
		marketCtrl.dummyList.push(item5);
		marketCtrl.dummyList.push(item6);
		marketCtrl.dummyList.push(item7);
		marketCtrl.dummyList.push(item8);



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
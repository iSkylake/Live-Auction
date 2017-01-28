angular.module('myApp')
	.controller('MarketCtrl', function($stateParams, $state) {
		var marketCtrl = this;
		console.log("parameter", $stateParams);

		//////// DUMMY DATA //////////
		var item1 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
		}

		var item2 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
		}

		var item3 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
		}

		var item4 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
		}

		var item5 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
		}

		var item6 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger. It is in the wilderness and lives in the trees and eats at night.',
			startTime: '5AM'
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
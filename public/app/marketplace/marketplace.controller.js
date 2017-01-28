angular.module('myApp')
	.controller('MarketCtrl', function($stateParams) {
		var marketCtrl = this;
		console.log("parameter", $stateParams);

		//////// DUMMY DATA //////////
		var item1 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger',
			startTime: '5AM'
		}

		var item2 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger',
			startTime: '5AM'
		}

		var item3 = {
			title: 'Lion',
			owner: 'George',
			image: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942',
			description: 'This is a Bengal Tiger',
			startTime: '5AM'
		}


		marketCtrl.dummyList = [];

		marketCtrl.dummyList.push(item1);
		marketCtrl.dummyList.push(item2);
		marketCtrl.dummyList.push(item3);






		marketCtrl.itemList = [];
		marketCtrl.postItem = function(title, owner, image, description, startTime) {
			marketService.postItem(title, owner, image, description, startTime)
				.then(function successCallback(response) {
					console.log('successfully posted item', response);
				}, function errorCallback(error) {
					console.log('failed to retrieve item', error);
				})
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

		marketCtrl.description = function() {
			return 'Here is an item that is displayed in the';
		}

		marketCtrl.image = "http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942";


	});
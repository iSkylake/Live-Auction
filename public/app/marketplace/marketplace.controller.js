angular.module('myApp')
	.controller('MarketCtrl', function($stateParams) {
		var marketCtrl = this;
		console.log("parameter", $stateParams);

		console.log('hey');

		marketCtrl.itemList = [];

		marketCtrl.postItem = function(title, image, description, startTime) {
			var item = {};
			item.title = title;
			item.image = image;
			item.description = description;
			item.startTime = startTime;
			return item;
		}

		marketCtrl.description = function() {
			return 'Here is an item that is displayed in the';
		}

		marketCtrl.image = "http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942";

		marketCtrl.hey ='ok';





	});
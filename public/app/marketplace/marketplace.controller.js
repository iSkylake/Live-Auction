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

		marketCtrl.postItem = function(title, image, description, startTime) {
			marketService.postItem;
		}


		// authCtrl.login = function(username, password) {
		// 	AuthFactory.login(username, password)
		// 		.then(function successCallback(response) {
		// 			console.log('success:', response);
		// 			authCtrl.username = username;
		// 			authCtrl.password = password;
		// 			console.log('authCtrl.username', authCtrl.username);

		// 			//store the token in sessionStorage
		// 			sessionStorage.accessToken = response.data.token;
		// 			sessionStorage.setItem('username', authCtrl.username);

		// 			$state.go('profile');
		// 			console.log(response)
		// 		}, function errorCallback(response) {
		// 			console.log('error:', response);
		// 		});
		// }


		// authCtrl.register = function(username, password) {
		// 	AuthFactory.register(username, password)
		// 		.then(function successfulCallback(response) {
		// 			console.log('success:', response);
		// 			$state.go('home')
		// 		}, function errorCallback(response) {
		// 			console.log('error:', response)
		// 		});
		// }





	});
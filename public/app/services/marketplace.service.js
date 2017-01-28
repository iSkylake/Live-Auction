angular.module('myApp')
	.factory('marketService', function($http) {

		var marketService = {
			getUser: getUser,
			postItem: postItem
		};
		return marketService;

		///////////////////////


		function postItem(title, owner, image, description, startTime) {
			var item = {
				title: title,
				owner: owner,
				image: image,
				description: description,
				startTime: startTime
			}
			$http.post('/postItem', item)
			.success(function(data) {
				console.log('successfully posted item',data);
				alert('Posted item!');
			})
			.error(function(error) {
				console.log('unable to post item',error);
				alert('Unable to post item');
			});
		}

		function getItems() {
			$http.get('/getItems', item)
			.success(function(data) {
				console.log('successfully retrieved data', data);
			})
			.error(function(error) {
				console.log('unable to get items', error);
				alert('Unable to get item');
			});
		}
	});
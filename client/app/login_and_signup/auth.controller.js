(function(){
	'use strict'
	angular
	.module('myApp')
	.controller('AuthCtrl', AuthCtrlFunction)

	//Inject Parameters here

	function AuthCtrlFunction($scope, AuthService, $location, $state) {
		var vm = this;
		vm.login = login;
		vm.logout = logout;
		vm.register = register
		vm.username = AuthService.currentUser()
		vm.isLoggedIn = AuthService.isLoggedIn();

		vm.newUser = {
			username: "",
			email: "",
			password: ""
		}



		function register() {
			vm.error = false;
			vm.disabled = true;
			AuthService.register(vm.newUser)
			//success
			.then(function(data) {
				console.log(AuthService.currentUser())
				alert('i am here');
				$state.go('marketplace')
				vm.diabled = false;
			})
			.catch(function() {
				vm.error = true;
				vm.errorMessage = "Invalid Name or Password";
				vm.disabled = false;
				vm.loginForm = {}
			})
		}

		function login() {
			vm.error = false;
			vm.disabled = true;
			AuthService.login(vm.newUser)
			//success
			.then(function(data) {
				$location.path('/home');
				$scope.diabled = false;
				vm.user = {}
			})
			.catch(function() {
				vm.error = true;
				vm.errorMessage = "Invalid Name or Password";
				vm.disabled = false;
				vm.loginForm = {}
			})
		}

		function logout() {
			AuthService.logout()
			console.log('logged out user!')
			$location.path('/login')
	
		}

	}
})()
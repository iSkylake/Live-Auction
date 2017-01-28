var app = angular.module('myApp', [
        'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    // 
    // For any unmatched url, redirect to /state1 
    $urlRouterProvider.otherwise("/home");
    // 
    // Now set up the states 
    $stateProvider
      .state('Auction', {
        url: "/auction",
        templateUrl: "app/AuctionCtrl/auction.view.html"
      })
  });
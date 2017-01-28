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
      .state('marketplace', {
        url: "/marketplace",
        templateUrl: "app/marketplace/marketplace.html"
      })
      .state('private_demo', {
        url: "/private_demo",
        templateUrl: "app/private_demo/private_demo.html"
      })
  });
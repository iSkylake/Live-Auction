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
        templateUrl: "app/auction/auction.view.html"
      })
      .state('marketplace', {
        url: "/marketplace/item/:item",
        templateUrl: "app/marketplace/marketplace.html",
        controller: "MarketCtrl as marketCtrl"
      })
      .state('private_demo', {
        url: "/private_demo",
        templateUrl: "app/private_demo/private_demo.html"
      })
      .state('create_auction', {
        url: "/create_auction",
        templateUrl: "app/create_auction/create_auction.html"
      })
  });
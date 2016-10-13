// https://scotch.io/tutorials/animating-angularjs-apps-ngview
//Tutorial - Not working

var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);


animateApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateURL: 'page-home.html',
    controller: 'mainController'
  })
  .when('/about', {
    templateURL: 'page-about.html',
    controller: 'aboutController'
  })
  .when('/contact', {
    templateURL: 'page-contact.html',
    controller: 'contactController'
  });
});

// Controllers

animateApp.controller('mainController', function($scope){
  $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope){
  $scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope){
  $scope.pageClass = 'page-contact';
});

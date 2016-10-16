var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
  $locationProvider.html5Mode(true);
});

myApp.controller('HomeController', function($scope){
  $scope.message = "hello. On home page!";
});

var routeApp = angular.module('routeApp', ['ngRoute']);

routeApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/dogs', {
    templateUrl: 'partials/dogs.html',
    controller: 'DogsController'
  });
});

routeApp.controller('MainController', function($scope){
  $scope.message = "Heyyy";
});

routeApp.controller('HomeController', function($scope){
  $scope.message = "I should say home?";
});

routeApp.controller('DogsController', function($scope){
  $scope.message = "dogs?";
});

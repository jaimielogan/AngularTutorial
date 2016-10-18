angular.module('ToDo', ['ngRoute']);

angular.module('ToDo')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });
  $locationProvider.html5Mode(true);
});

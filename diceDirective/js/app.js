angular.module('diceDirective', ['ngRoute', 'diceItemDirective']);

angular.module('diceDirective')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html'
  });
  $locationProvider.html5Mode(true);
});

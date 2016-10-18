angular.module('calculatorApp', ['ngRoute']);

angular.module('calculatorApp')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'mathController'
  });
  $locationProvider.html5Mode(true);
});

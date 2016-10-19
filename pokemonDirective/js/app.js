angular.module('pokemonDirective', ['ngRoute', 'pokemonItemDirective']);

angular.module('pokemonDirective')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/pokemon-details.html',
    controller: 'pokemonController'
  });
  $locationProvider.html5Mode(true);
});

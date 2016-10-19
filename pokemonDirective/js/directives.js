angular.module('pokemonItemDirective', [])
.directive('pokemonItem', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/pokemon-details.html',
    controller: 'pokemonController'
  };
});

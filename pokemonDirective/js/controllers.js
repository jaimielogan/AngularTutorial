angular.module('pokemonDirective')
.controller('pokemonController', function($scope, pokemonSearch){
  $scope.view = {};
  pokemonSearch.searchPokemon()
  .then(function(results){
    $scope.view.results = results;
    console.log($scope.view.results);
  })
  .catch(function(error){
    console.log(error);
  });
});

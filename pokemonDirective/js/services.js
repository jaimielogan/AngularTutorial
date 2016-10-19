angular.module('pokemonDirective')
.service('pokemonSearch', function($q, $http){
  this.searchPokemon = function(){
    var pokemon_one = $http.get('http://pokeapi.co/api/v1/pokemon/1');
    var pokemon_two = $http.get('http://pokeapi.co/api/v1/pokemon/2');
    return $q.all([pokemon_one, pokemon_two]);
  };
});

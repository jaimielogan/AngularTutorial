var movieSearch = angular.module('movieSearch', ['ngRoute']);

// Controllers
movieSearch.controller('MovieController', function($scope,$http){
  $scope.view = {};
  $scope.searchMovie = function(){
    var input = $scope.view.searchText;
    var url = 'http://www.omdbapi.com/?s=' + input;
    $http.get(url)
    .success(function(data){
      $scope.view.movies = data.Search;
    })
    .catch(function(error){
      $scope.view.error = error.status;
    });
  };
});

movieSearch.controller('ShowController', function($scope, $http, $route){
  console.log('even reaching the controller??');
  $scope.view = {};
  console.log('movieDetails function reached');
  var movieID = $route.current.params.id;
  var url = 'http://www.omdbapi.com/?i=' + movieID + '&tomatoes=true';
  $http.get(url)
  .success(function(data){
    console.log(data);
    $scope.view.detail = data;
  })
  .catch(function(error){
    $scope.view.error = error.status;
  });
});

// Routing
movieSearch.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/movies.html',
    controller: 'MovieController'
  })
  .when('/:id*/show', {
    templateUrl: 'partials/detail.html',
    controller: 'ShowController'
  });
});

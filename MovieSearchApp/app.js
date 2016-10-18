angular.module('movieSearch', ['ngRoute']);

// Routing
angular.module('movieSearch')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/movies.html',
    controller: 'MovieController'
  })
  .when('/show/:imdbID*', {
    templateUrl: './partials/detail.html',
    controller: 'ShowController'
  });
  $locationProvider.html5Mode(true);
});

// Controllers
angular.module('movieSearch')
.controller('MovieController', function($scope, $http, $route){
  $scope.view = {};
  // Would be pulled into a SearchMovie IMDB Service
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

angular.module('movieSearch')
.controller('ShowController', function($scope, $http, $route){
  $scope.view = {};
  var movieID = $route.current.params.imdbID;
  var url = 'http://www.omdbapi.com/?i=' + movieID + '&tomatoes=true';
  $http.get(url)
  .success(function(data){
    $scope.view.detail = data;
  })
  .catch(function(error){
    $scope.view.error = error.status;
  });
});

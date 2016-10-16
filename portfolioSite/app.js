var portfolio = angular.module('portfolio', ['ngRoute']);

// RouteProvider
portfolio.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController'
  })
  .when('/bio', {
    templateUrl: 'partials/bio.html',
    controller: 'BioController'
  })
  .when('/resume', {
    templateUrl: 'partials/resume.html',
    controller: 'ResumeController'
  });
});

// Define Controllers
portfolio.controller('HomeController', function($scope, $location){
  $scope.isActive = function(viewLocation){
    return viewLocation == $location.path();
  };
});

portfolio.controller('ProjectsController', function($scope){
});

portfolio.controller('BioController', function($scope){
});

portfolio.controller('ResumeController', function($scope){
});

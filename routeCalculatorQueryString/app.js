var calculator = angular.module('calculator', ['ngRoute']);

// controllers
calculator.controller('mainController', function($scope){
});

calculator.controller('AddController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.path = $location.path();
  $scope.view.location = $location.search();
  $scope.view.num1 = $location.search().x;
  $scope.view.num2 = $location.search().y;
  $scope.view.total = Number($scope.view.num1) + Number($scope.view.num2);
});

calculator.controller('SubController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.path = $location.path();
  $scope.view.location = $location.search();
  $scope.view.num1 = $location.search().x;
  $scope.view.num2 = $location.search().y;
  $scope.view.total = Number($scope.view.num1) - Number($scope.view.num2);
});

calculator.controller('MulController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.path = $location.path();
  $scope.view.location = $location.search();
  $scope.view.num1 = $location.search().x;
  $scope.view.num2 = $location.search().y;
  $scope.view.total = Number($scope.view.num1) * Number($scope.view.num2);
});

calculator.controller('DivController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.path = $location.path();
  $scope.view.location = $location.search();
  $scope.view.num1 = $location.search().x;
  $scope.view.num2 = $location.search().y;
  $scope.view.total = Number($scope.view.num1) / Number($scope.view.num2);
});


// routeProvider
calculator.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'MainController'
  })
  .when('/add', {
    templateUrl: 'partials/add.html',
    controller: 'AddController'
  })
  .when('/sub', {
    templateUrl: 'partials/sub.html',
    controller: 'SubController'
  })
  .when('/mul', {
    templateUrl: 'partials/mul.html',
    controller: 'MulController'
  })
  .when('/div', {
    templateUrl: 'partials/div.html',
    controller: 'DivController'
  });
});

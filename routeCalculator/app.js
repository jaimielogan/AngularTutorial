var calculator = angular.module('calculator', ['ngRoute']);

// controllers
calculator.controller('mainController', function($scope){
});

calculator.controller('AddController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.location = $location.path();
  $scope.view.params = $route.current.params;
  $scope.view.num1 = $route.current.params.number1;
  $scope.view.num2 = $route.current.params.number2;
  $scope.view.total = Number($scope.view.num1) + Number($scope.view.num2);
});

calculator.controller('SubController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.location = $location.path();
  $scope.view.params = $route.current.params;
  $scope.view.num1 = $route.current.params.number1;
  $scope.view.num2 = $route.current.params.number2;
  $scope.view.total = Number($scope.view.num1) - Number($scope.view.num2);
});

calculator.controller('MulController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.location = $location.path();
  $scope.view.params = $route.current.params;
  $scope.view.num1 = $route.current.params.number1;
  $scope.view.num2 = $route.current.params.number2;
  $scope.view.total = Number($scope.view.num1) * Number($scope.view.num2);
});

calculator.controller('DivController', function($scope, $location, $route){
  $scope.view = {};
  $scope.view.location = $location.path();
  $scope.view.params = $route.current.params;
  $scope.view.num1 = $route.current.params.number1;
  $scope.view.num2 = $route.current.params.number2;
  $scope.view.total = Number($scope.view.num1) / Number($scope.view.num2);
});


// routeProvider
calculator.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'MainController'
  })
  .when('/add/:number1*/:number2*', {
    templateUrl: 'partials/add.html',
    controller: 'AddController'
  })
  .when('/sub/:number1*/:number2*', {
    templateUrl: 'partials/sub.html',
    controller: 'SubController'
  })
  .when('/mul/:number1*/:number2*', {
    templateUrl: 'partials/mul.html',
    controller: 'MulController'
  })
  .when('/div/:number1*/:number2*', {
    templateUrl: 'partials/div.html',
    controller: 'DivController'
  });
});

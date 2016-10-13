var app = angular.module('myApp', ['ngAnimate']);

app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.instructors = ['Tim', 'Ian', 'Matt', 'Elie'];
});

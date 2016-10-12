var app = angular.module('MadLibs', []);

app.controller('MainController', function($scope){
  $scope.boyName = '';
  $scope.adj = '';
  $scope.pNoun1 = '';
  $scope.pNoun2 = '';
  $scope.insect = '';
  $scope.pNoun3 = '';
  $scope.verb = '';
  $scope.generate = function(){
    $scope.boyName = boyName;
    $scope.adj = adj;
    $scope.pNoun1 = pNoun1;
    $scope.pNoun2 = pNoun2;
    $scope.insect = insect;
    $scope.pNoun3 = pNoun3;
    $scope.verb = verb;
  };
  $scope.reset = function(){
    $scope.boyName = '';
    $scope.adj = '';
    $scope.pNoun1 = '';
    $scope.pNoun2 = '';
    $scope.insect = '';
    $scope.pNoun3 = '';
    $scope.verb = '';
  };
});

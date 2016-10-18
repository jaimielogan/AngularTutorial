angular.module('calculatorApp')
.controller('mathController', function($scope, mathService){
  $scope.view = {};
  $scope.calculate = function(){
    var operator = $scope.view.operator;
    var first = $scope.view.first;
    var second = $scope.view.second;
    $scope.view.result = mathService[operator](first,second);
  };
});

angular.module('diceItemDirective', [])
.directive('diceDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.html',
    controller: function($scope){
      $scope.view = {};
      $scope.view.randomNumber = 0;
      $scope.RandomNumber = function(){
        return Math.ceil(Math.random() * 6);
      };
    },
    link: function(scope, element, attrs){
      element.on('mouseenter',function(event){
        element.css('cursor', 'pointer');
      });
      element.on('click', function(){
        scope.view.randomNumber = scope.RandomNumber();
        console.log(scope.view.randomNumber);
        scope.$apply();
      });
    }
  };
});

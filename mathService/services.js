angular.module('calculatorApp')
.service('mathService', function(){
  this.add = function(first,second){
    return first + second;
  };
  this.subtract = function(first,second){
    return first - second;
  };
  this.multiply = function(first,second){
    return first * second;
  };
  this.divide = function(first,second){
    return first / second;
  };
});

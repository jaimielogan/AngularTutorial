var app = angular.module('myApp', ['ngMessages']);

app.controller('MainController', function($scope){
  $scope.user = {};
  $scope.users = [];
  $scope.submit = function(isValid){
    if(isValid){
      alert('form is valid!');
    }
    else {
      alert('form is not valid');
    }
  };
  $scope.submitUser = function(){
    $scope.users.push({
      username: $scope.user.username,
      password: $scope.user.password,
      email: $scope.user.email,
      zipcode: $scope.user.zipcode,
    });
  };
});

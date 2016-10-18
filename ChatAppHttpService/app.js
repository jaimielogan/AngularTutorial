var chatApp = angular.module('chatApp', []);

chatApp.controller('MainController', function($scope, $http){
  $scope.view = {};

  $http.get('https://messagehttpservice.herokuapp.com/messages')
  .success(function(data){
    $scope.view.messages = data;
  })
  .catch(function(error){
    $scope.view.messages = error.status;
  });

  $scope.submitQuote = function(){
    var data = {
      message: {
        name: $scope.view.name,
        content: $scope.view.quote
      }
    };
    $http.post('https://messagehttpservice.herokuapp.com/messages', data);
  };
});

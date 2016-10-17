var httpApp = angular.module('httpApp', []);

httpApp.controller('MainController', function($scope, $http){
  $scope.view = {};
  // $http.get('https://api.github.com/zen')
  // .then(function(data){
  //   $scope.view.zenData = data.data;
  // });

  $http.get('./itunes.json')
  .success(function(data){
    $scope.view.zenData = data;
  })
  .catch(function(error){
    $scope.view.zenData = error.status;
  });
});

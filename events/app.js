var app = angular.module('myApp', []);

app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.number = 5;
  $scope.view.word = '';

  $scope.pickRandomNumber = function(){
    $scope.view.number = Math.floor(Math.random()*10) + 1;
  };
  $scope.reverse = function(word){
    newWord = word.split('').reverse().join('');
    console.log(newWord);
    $scope.view.word = newWord;
  };

  // PingPong
  $scope.view.enterCount1 = 0;
  $scope.view.enterCount2 = 0;
  $scope.addScore1 = function(){
    $scope.view.enterCount1 += 1;
  };
  $scope.addScore2 = function(){
    $scope.view.enterCount2 += 1;
  };
  $scope.reset = function(){
    $scope.view.enterCount1 = 0;
    $scope.view.enterCount2 = 0;
  };


  // RandomColor
  $scope.view.colors = [];
  $scope.view.replaying = false;
  $scope.randomColor = function(){
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    $scope.view.colors.push(color);
    return color;
  };
  $scope.replay = function(colors){
    var displayPrevColor = function(){
      $scope.view.colors = colors.reverse();

    };
  };
});

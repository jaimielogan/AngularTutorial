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
  $scope.view.gameover = false;
  $scope.view.winner = '';
  $scope.view.serveCount = 0;
  $scope.view.server = true;
  // ** check to see if winner, if not add to score
  // if winner then set as winner and make gameover true
  // ** Make a serving increment?
  $scope.addScore1 = function(){
    if($scope.view.gameover === false){
      $scope.view.enterCount1 += 1;
      $scope.view.serveCount++;
      if($scope.view.serveCount % 2 !== 0){
        $scope.view.server = false;
      }
      else if ($scope.view.serveCount % 2 === 0) {
        $scope.view.server = true;
      }
      if($scope.view.enterCount1 >= 11){
        $scope.view.winner = 'player1';
        $scope.view.gameover = true;
      }
    }
  };
  $scope.addScore2 = function(){
    if($scope.view.gameover === false){
      $scope.view.enterCount2 += 1;
      $scope.view.serveCount++;
      if($scope.view.serveCount % 2 !== 0){
        $scope.view.server = false;
      }
      else if ($scope.view.serveCount % 2 === 0) {
        $scope.view.server = true;
      }
      if($scope.view.enterCount2 >= 11){
        $scope.view.winner = 'player2';
        $scope.view.gameover = true;
      }
    }
  };
  $scope.reset = function(){
    $scope.view.enterCount1 = 0;
    $scope.view.enterCount2 = 0;
    $scope.view.gameover = false;
    $scope.view.winner = '';
    $scope.view.serveCount = 0;
    $scope.view.server = true;
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
  $scope.replay = function() {
    var displayPrevColor = function() {
      // do some logic to change color
      // if done replay colors
      replaying = false;
      // else
      $timeout(displayPrevColor, 1000);
      // end if/else
    };
    if (!replaying) {
      replaying = true;
      // This timeout starts the timeout loop
      $timeout(function() { displayPrevColor(); }, 500);
    }
  };
});

angular.module('ToDo')
.controller('HomeController', function($scope, ToDoList){
  $scope.view = {};
  $scope.view.list = ToDoList.list;

  $scope.addToDo = function(){
    var input = $scope.view.content;
    ToDoList.add(input);
  };

  $scope.toggleEditForm = function(list){
    list.viewEdit = !list.viewEdit;
  };
  $scope.edit = function(index){
    var input = $scope.view.editContent[index];
    ToDoList.update(index,input);
  };

  $scope.delete = function(index){
    ToDoList.delete(index);
  };
});

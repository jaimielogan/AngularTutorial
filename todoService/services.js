angular.module('ToDo')
.service('ToDoList', function(){
  this.list = [{
    content: 'Item 1',
    viewEdit: false
  },
  {
    content: 'Item 2',
    viewEdit: false
  },
  {
    content: 'Item 3',
    viewEdit: false
  }];
  this.add = function(input){
    this.list.push({
      content: input,
      viewEdit: false
    });
  };
  this.update = function(index,input){
    this.list[index].content = input;
    this.list[index].viewEdit = false;
  };
  this.delete = function(index){
    this.list.splice(index,1);
  };
});

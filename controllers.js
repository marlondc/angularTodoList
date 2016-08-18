toDoApp.controller("ToDoController", ["ToDoService", "ToDoFactory", function(ToDoService, ToDoFactory) {

  var self = this

  self.toDos = ToDoService.getAll()

  self.addToDo = function(toDoText) {
    self.toDos.push(new ToDoFactory(toDoText))
  }

  self.removeCompletedToDos = function() {
    self.toDos = self.toDos.filter(function(todo) {
      return todo.completed == false
    })
  }

}]);

toDoApp.factory("ToDoFactory", function() {

  Todo = function(toDoText, completed) {
    this.text = toDoText
    this.completed = (typeof completed !== undefined) ? completed : false
  }

  Todo.prototype.complete = function () {
    this.completed = true
  };

  return Todo
})

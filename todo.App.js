todo.App = function() {
  this.tasks = new todo.Tasks();
  var task = new todo.Task({description: 'Derp'});
  this.tasks.add(task);

  this.tasksView = new todo.TasksView({collection: this.tasks});
  this.tasksView.render().appendTo('body');
};

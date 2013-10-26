todo.Tasks = Backbone.Collection.extend({
  url: 'localhost:8888/tasks',
  model: todo.Task
});

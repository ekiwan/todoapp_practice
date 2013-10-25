todo.App = Backbone.Model.extend({
  initialize: function(params) {
    this.tasks = new todo.Tasks();
    var task = new todo.Task({description: 'Your first todo!'});
    this.tasks.add(task);
  }
});

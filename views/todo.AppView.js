todo.AppView = Backbone.View.extend({
  initialize: function() {
    this.tasksView = new todo.TasksView({collection: this.model.tasks});
    this.tasksView.$el.appendTo('#view');
  }
});

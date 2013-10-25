todo.AppView = Backbone.View.extend({
  el: '#view',

  initialize: function() {
    this.addTaskView = new todo.AddTaskView();
    this.tasksView = new todo.TasksView({collection: this.model.tasks});
    this.listenTo(this.addTaskView, 'addToTasks', this.addTask.bind(this));
    this.render();
  },

  addTask: function(task) {
    this.model.tasks.add(task);
  },

  render: function() {
    this.$el.append('<h1>Tasks!</h1>');
    this.$el.append(this.addTaskView.$el);
    this.$el.append(this.tasksView.$el);
    return this.$el;
  }

});

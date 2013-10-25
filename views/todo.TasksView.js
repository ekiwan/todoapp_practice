todo.TasksView = Backbone.View.extend({
  className: 'tasks',
  tagName: 'ul',

  initialize: function() {
    this.addTaskView = new todo.AddTaskView();
    _.bindAll(this, 'render', 'addTask');
    // TODO: on add, only append new thing to $el
    // TODO: on remove, only remove that one thing from $el
    this.listenTo(this.addTaskView, 'addToTasks', this.addTask);
    this.render();
  },

  addTask: function(newTask) {
    this.collection.add(newTask, {silent: true});
    var taskView = new todo.TaskView({model: newTask});
    this.$el.append(taskView.$el);
  },

  render: function() {
    this.$el.append('<h1>Tasks!</h1>')
    this.$el.append(this.addTaskView.$el);
    this.collection.each(function(model){
      var taskView = new todo.TaskView({model: model});
      this.$el.append(taskView.$el);
    }, this);
    return this.$el;
  }
});

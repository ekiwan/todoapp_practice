todo.TasksView = Backbone.View.extend({
  className: 'tasks',
  tagName: 'ul',

  initialize: function() {
    this.addTaskView = new todo.AddTaskView();
    _.bindAll(this, 'render', 'addTask', 'removeTask');
    this.listenTo(this.collection, 'removeMe', this.removeTask);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'add', this.addTask);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(model){
      var taskView = new todo.TaskView({model: model});
      this.$el.append(taskView.$el);
    }, this);
    return this.$el;
  },

  addTask: function(task) {
    var taskView = new todo.TaskView({model: task});
    this.$el.append(taskView.$el);
  },

  removeTask: function(task) {
    this.collection.remove(task);
  }
});

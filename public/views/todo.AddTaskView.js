todo.AddTaskView = Backbone.View.extend({
  className: 'addTask',

  events: {
    'click button': 'addTask'
  },

  initialize: function(params) {
    this.render();
  },

  render: function() {
    this.$el.append('<input type="text" placeholder="New task"/><button>Add Task</button>');
    return this.$el;
  },

  addTask: function(){
    var description = this.$('input').val();
    this.$('input').val('');
    var newTask = new todo.Task({description: description});
    this.trigger('addToTasks', newTask);
  }
});

todo.TasksView = Backbone.View.extend({
  initialize: function() {
    return this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(model){
      var taskView = new todo.TaskView({model: model});
      this.$el.append(taskView.$el);
    }, this);
    return this.$el;
  }
});

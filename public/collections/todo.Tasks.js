todo.Tasks = Backbone.Collection.extend({
  url: '/tasks',
  model: todo.Task,
  initialize: function() {
    this.fetch();
  }
});

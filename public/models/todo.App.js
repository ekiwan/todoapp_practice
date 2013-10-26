todo.App = Backbone.Model.extend({
  initialize: function(params) {
    this.tasks = new todo.Tasks();
  }
});

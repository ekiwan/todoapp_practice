todo.Task = Backbone.Model.extend({
  initialize: function(params) {
    this.set('id', params.id);
    this.set('description', params.description || 'No description yet');
    this.set('complete', params.complete || false);
  }
});

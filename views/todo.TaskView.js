todo.TaskView = Backbone.View.extend({
  className: 'task',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render.bind(this));
    this.render();
  },

  render: function() {
    this.$el.text('Task: ' + this.model.get('description'));
    return this.$el;
  }
});

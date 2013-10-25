todo.TaskView = Backbone.View.extend({
  className: 'task',
  tagName: 'li',

  events: {
    'dblclick': 'toggleEditView',
    'submit form': 'changeDescription'
  },

  initialize: function() {
    this.edit = false;
    this.listenTo(this.model, 'change', this.render.bind(this));
    this.render();
  },

  render: function() {
    this.$el.text(this.model.get('description'));
    return this.$el;
  },

  changeDescription: function(e) {
    e.preventDefault();
    var description = this.$('input').val();
    this.model.set('description', description);
  },

  toggleEditView: function() {
    this.edit = !this.edit;
    if (this.edit) {
      var $input = $('<input type="text"/>').val(this.model.get('description'));
      var $form = $('<form/>').append($input);
      this.$el.html($form);
    }
  }
});

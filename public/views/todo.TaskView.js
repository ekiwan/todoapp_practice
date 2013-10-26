todo.TaskView = Backbone.View.extend({
  className: 'task',
  tagName: 'li',

  events: {
    'dblclick .description': 'toggleEditView',
    'submit form': 'changeDescription',
    'click button.cancel': 'render',
    'click button.remove': 'triggerRemove',
    'change input.status': 'changeStatus'
  },

  initialize: function() {
    this.edit = false;
    this.listenTo(this.model, 'change:description', this.render.bind(this));
    this.render();
  },

  render: function() {
    this.$el.empty();
    var $desc = $('<span class="description"/>').text(this.model.get('description'));
    this.$el.append($desc);
    this.$el.append('<input class="status" type="checkbox"/>');
    return this.$el;
  },

  triggerRemove: function() {
    this.model.trigger('removeMe', this.model);
  },

  changeStatus: function(evt) {
    var next = !this.model.get('complete');
    this.model.set('complete', next);
  },

  changeDescription: function(evt) {
    evt.preventDefault();
    var description = this.$('input').val();
    this.model.set('description', description);
  },

  toggleEditView: function() {
    this.edit = !this.edit;
    if (this.edit) {
      var $input = $('<input type="text"/>').val(this.model.get('description'));
      var $form = $('<form/>').append($input);
      this.$el.html($form);
      this.$el.append('<button class="cancel">Cancel</button>');
      this.$el.append('<button class="remove">Delete Task</button>');
    }
  }
});

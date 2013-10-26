window.todo = {
  init: function() {
    todo.app = new todo.App();
    todo.appView = new todo.AppView({model: todo.app});
  }
};

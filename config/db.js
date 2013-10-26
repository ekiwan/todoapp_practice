var mongoose = require('mongoose');

module.exports = function(app) {
  mongoose.connect('mongodb://127.0.0.1:27017/todo');
  mongoose.model('Task', require('../models/Task.js'));
};

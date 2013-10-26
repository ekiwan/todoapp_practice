var mongoose = require('mongoose');
var Task = mongoose.model('Task');

exports.list = function(req, res, next) {
  Task.find().exec(function(err, tasks){
    console.log('listing tasks', tasks, err);
    if (err) return next(err);
    res.send(tasks);
  });
};

exports.create = function(req, res) {
  var task = new Task({
    description: req.body.description,
    complete: false
  });
  task.save(function(err, newTask){
    if (err) return res.send('Task not created.');
    res.send('Task created', {id: newTask._id});
  });
};

exports.get = function(req, res) {
  Task.find({_id: req.body.id}).exec(function(err, task){
    if (err) return res.send('Not found');
    res.send(task);
  });
};

exports.change = function(req, res) {

};

exports.delete = function(req, res) {

};

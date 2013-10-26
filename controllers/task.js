var mongoose = require('mongoose');
var Task = mongoose.model('Task');

exports.list = function(req, res, next) {
  Task.find().exec(function(err, tasks){
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
  Task.findOne({_id: req.body.id}).exec(function(err, task){
    if (err) return res.send('Not found');
    task.complete = req.body.complete;
    task.description = req.body.description;
    task.save(function(err, task){
      if (err) return res.send('Task not changed.');
      res.send('Task changed', {id: task._id});
    });
  });
};

exports['delete'] = function(req, res) {
  Task.findOne({_id: req.params.id}).exec(function(err, task){
    if (err) return res.send('Not found');
    task.remove(function(err, task){
      if (err) return res.send('Task not removed.');
      res.send('Task removed', {id: req.params.id});
    });
  });
};

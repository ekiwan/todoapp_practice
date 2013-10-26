var express = require('express');
var path = require('path');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};


module.exports = function(app) {
  app.use(express.bodyParser());

  var task = require('../controllers/task.js');
  app.get('/tasks', task.list);
  app.post('tasks', task.create);
  app.get('/tasks/:id', task.get);
  app.put('/tasks/:id', task.change);
  app['delete']('/tasks/:id', task['delete']);
  app.options('*', function(req,res){
    res.set(defaultCorsHeaders);
    res.end('');
  });

  app.use(express.static(path.join(__dirname, '../public')));
};

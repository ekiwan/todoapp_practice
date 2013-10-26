var app = require('express')();
require('./config')(app);
var port = 8888;
app.listen(port);
console.log('Listening on port: ' + port);

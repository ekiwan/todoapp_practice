var app = require('express')();
require('./config/db.js')(app);
require('./config/routes.js')(app);
var port = 8888;
app.listen(port);
console.log('Listening on port: ' + port);

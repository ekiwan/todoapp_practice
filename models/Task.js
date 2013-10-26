var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    description: String,
    complete: Boolean
});

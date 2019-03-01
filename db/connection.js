const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/post')
mongoose.Promise = Promise
module.exports = mongoose
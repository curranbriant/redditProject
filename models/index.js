const mongoose = require('../db/connection')

module.exports = {
    Post: mongoose.model('Post', require('./post')),
    Comment: mongoose.model('Comment', require('./post'))
    
}
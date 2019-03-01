const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/post')
mongoose.Promise = Promise
module.exports = mongoose

if (process.env.NODE_ENV == "production") {
    mongoose.connect (process.env.DB_URL)
} else {
    mongoose.connect("mongodb://localhost/post")
}
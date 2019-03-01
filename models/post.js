const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    link: String
})

module.exports = Post
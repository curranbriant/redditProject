const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    content: String,
})

const Post = new Schema({
    title: String,
    link: String,
    comments: [Comment]
})

module.exports = Post, Comment
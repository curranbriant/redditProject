const mongoose = require("../db/connection");
const Schema = mongoose.Schema
const Comment = require('./comment.js'); 

const Post = new Schema({
    title: String,
    link: String,
    comments: [Comment]
})
module.exports = Post
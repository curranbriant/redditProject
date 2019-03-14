const mongoose = require("../db/connection");
const Schema = mongoose.Schema


const Comment = new Schema({
    content: String,
})
module.exports = Comment;
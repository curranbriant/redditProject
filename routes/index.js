const express = require('express')
const router = express.Router()
const { Post } = require('../models/index')

router.get('/', function(req, res) {
    Post.find({}).then(posts => {
        res.render('index', { posts });
    });
});

router.use('/post', require('./post.js'));

module.exports = router;
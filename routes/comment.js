const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.get('/new', commentController.new);
router.post('', commentController.create);

module.exports = router;
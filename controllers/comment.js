const { Comment } = require("../models/index");
module.exports = {
  new: function(req, res) {
    res.render("comment/new");
  },
  create: function(req, res) {
    const { content } = req.body;
    Comment.create({
      content
    }).then(comment => {
      res.redirect(`/comment/${comment._id}`);
    });
  },
  show: function(req, res) {
    Comment.findById(req.params.id).then(comment => {
      res.render("comment/show", { comment });
    });
  },
  edit: function(req, res) {
    Comment.findById(req.params.id).then(comment => {
      res.render("comment/edit", { comment });
    });
  },
  update: function(req, res) {
    const { content } = req.body;
    Comment.findByIdAndUpdate(req.params.id, {
      content
    }).then(comment => {
      res.redirect(`/comment/${comment._id}`);
    });
  }
};
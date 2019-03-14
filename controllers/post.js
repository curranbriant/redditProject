const { Post } = require("../models/index");
const { Comment } = require("../models/index");
module.exports = {
  new: function(req, res) {
    res.render("post/new");
  },
  create: function(req, res) {
    const { title, url } = req.body;
    Post.create({
      title,
      url
    }).then(post => {
      res.redirect(`/post/${post._id}`);
    });
  },
  show: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  edit: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/edit", { post });
    });
  },
  update: function(req, res) {
    const { title, url } = req.body;
    Post.findByIdAndUpdate(req.params.id, {
      $set: {
        title,
        url
      }
    }).then(post => {
      res.redirect(`/post/${post._id}`);
    });
  },
  addComment: function(req, res) {
    const createComment = {
      content: req.body.content
    };
    Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { comments: createComment }
      }
    ).then(post => res.redirect(`/post/${post._id}`));
  },
  delete: function(req, res) {
    Post.remove({ _id: req.params.id }).then(post => {
      res.redirect("/");
    });
  }
};

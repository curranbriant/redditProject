const { Post } = require("../models/index");
const { Comment } = require("../models/index");

Post.remove({}).then(() => {
  Post.insertMany([
    {
      title: "asdfasd?",
      url:
        ",",
        comments: [
        { content: "asdf!!" },
        { content: "asdf" }
      ]
    },
    {
      title: "New company",
      url:
        "google.com",
        comments: [
        { content: "asdf" },
        { content: "asdf?" }
      ]
    },
    {
      title: "asdf",
      url: "asdf.sadf",
      comments: [{ content: "asdf" }]
    }
  ]).then(posts => {
    console.log("#", posts);
    process.exit();
  });
});

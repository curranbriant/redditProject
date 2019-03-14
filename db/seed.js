const { Post } = require("../models/index");
const { Comment } = require("../models/index");

Post.remove({}).then(() => {
  Post.insertMany([
    {
      title: "Google to sell self driving Car subsidary",
      url:
        ",",
        comments: [
        { content: "Nice!!" },
        { content: "Waste of money" }
      ]
    },
    {
      title: "New company IPOs",
      url:
        "google.com",
        comments: [
        { content: "sell sell sell" },
        { content: "I'm buying!" }
      ]
    },
    {
      title: "The Dot com bubble will repeat itself",
      url: "asdf.sadf",
      comments: [{ content: "True" }]
    }
  ]).then(posts => {
    console.log("#", posts);
    process.exit();
  });
});

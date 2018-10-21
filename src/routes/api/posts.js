const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../utilities/authenticate");
const userType = require("../../utilities/userType");
const database = require("../../services/database");
const cors = require('./cors');

router.use(isLoggedIn);

router.route("/view-post")
// .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get( async (req, res, next) => {
  console.log(req.headers);
  try {
    let user = JSON.stringify({ userId: req.user.id });
    let obj = [];
    let posts = await database.viewPost();
    posts.forEach(post => {
      if (post.likes) {
        post = post.toObject();
        likes = JSON.stringify(post.likes);
        post.liked = likes.indexOf(user) > -1 ? true : false;
        obj.push(post);
      }
    });
    res.json({ success: true, posts: obj });
  } catch (error) {
    return next(error);
  }
});

router.post("/write-post", userType.isOrganization, async (req, res, next) => {
  try {
    let post = await database.addPost(req.body, req.user.id);
    res.json({ success: true, message: "Posted Successfully!" });
  } catch (error) {
    return next(error);
  }
});

router.post("/like-post", async (req, res, next) => {
  try {
    let result = await database.likePost(req.body.postId, req.user.id);
    res.json({ success: true, message: "Post Liked!" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

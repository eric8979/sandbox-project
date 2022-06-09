const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const Post = require("../models/postModel");
const User = require("../models/userModel");
// handles "exception" inside of async express routes
const asyncHandler = require("express-async-handler");

// @desc Get all posts
// @route GET /api/posts
// @access Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  if (!posts) {
    res.status(400);
    throw new Error("Post not created");
  }

  res.status(200).send(posts);
});

// @desc Add a post
// @route POST /api/posts/add
// @access Private
const addPost = asyncHandler(async (req, res) => {
  const { text, token } = req.body;
  const decoded = jwt.decode(token, { complete: true });

  const user = await User.findById(decoded.payload.id).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User info not passed");
  }
  if (!text) {
    res.status(400);
    throw new Error("Please fill in texts");
  }

  const post = await Post.create({
    user,
    text,
  });

  if (!post) {
    res.status(400);
    throw new Error("Post not created");
  }

  res.send("success");
});

module.exports = {
  getAllPosts,
  addPost,
};

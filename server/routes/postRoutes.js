const express = require("express");
const router = express.Router();
const { getAllPosts, addPost } = require("../actions/postActions");

// "/api/posts/"
router.get("/", getAllPosts);
router.post("/add", addPost);

module.exports = router;

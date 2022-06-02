const express = require("express");
const router = express.Router();
const { createChatroom, delChatroom } = require("../actions/chatroomActions");
const { authHandler } = require("../middleware/authMiddleware");

// "/api/rooms/"
router.post("/", authHandler, createChatroom);
router.delete("/", authHandler, delChatroom);
// router.post("/message", authHandler, sendMessage);

module.exports = router;

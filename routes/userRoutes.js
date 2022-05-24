const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getSelf } = require("../actions/userActions");
const { authHandler } = require("../middleware/authMiddleware");

router.post("/", signupUser);
router.post("/login", loginUser);
router.get("/self", authHandler, getSelf);

module.exports = router;

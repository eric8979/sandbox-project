const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getAllusers,
  getSelf,
} = require("../actions/userActions");
const { authHandler } = require("../middleware/authMiddleware");

router.post("/", signupUser);
router.post("/login", loginUser);
router.get("/all", getAllusers);
router.get("/self", authHandler, getSelf);

module.exports = router;

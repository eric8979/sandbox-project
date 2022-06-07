const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getAllusers,
  getSelf,
  editUser,
} = require("../actions/userActions");
const { authHandler } = require("../middleware/authMiddleware");

// "/api/users/"
router.post("/", signupUser);
router.post("/login", loginUser);
router.get("/all", authHandler, getAllusers);
router.get("/self", authHandler, getSelf);
router.put("/edit", authHandler, editUser);

module.exports = router;

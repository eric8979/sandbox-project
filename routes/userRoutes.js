const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../actions/userActions");

router.post("/", signupUser);
router.post("/login", loginUser);

module.exports = router;

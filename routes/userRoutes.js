const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getSelf } = require("../actions/userActions");

router.post("/", signupUser);
router.post("/login", loginUser);
router.get("/self", getSelf);

module.exports = router;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// @desc Signup new user
// @route POST /api/users
// @access Public
const signupUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if user already exists

  // Hash password (bcrypt)

  // Create/Build user

  // Send response
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for the user email

  // Send response
});

module.exports = {
  signupUser,
  loginUser,
};

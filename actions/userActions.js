const bcrypt = require("bcryptjs");
// handles "exception" inside of async express routes
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwtGenerator = require("../config/jwt");

// @desc Signup new user
// @route POST /api/users
// @access Public
const signupUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User with the email already exists");
  }

  // Hash password (bcrypt)
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create/Build user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  // Send response
  if (user) {
    // 201: Resource successfully created
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: jwtGenerator(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check email & password
  const userInDB = await User.findOne({ email });
  const validPassword = await bcrypt.compare(password, userInDB.password);
  if (userInDB && validPassword) {
    res.status(200).json({
      _id: userInDB.id,
      username: userInDB.username,
      email: userInDB.email,
      token: jwtGenerator(userInDB._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Get user(only self)
// @route GET /api/users/self
// @access Private
const getSelf = asyncHandler(async (req, res) => {
  // Not figured out
  res.status(200).json(req.user);
});

module.exports = {
  signupUser,
  loginUser,
  getSelf,
};

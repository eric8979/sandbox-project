const bcrypt = require("bcryptjs");
// handles "exception" inside of async express routes
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { jwtGenerator } = require("../config/jwt");

// @desc Signup new user
// @route POST /api/users
// @access Public
const signupUser = asyncHandler(async (req, res) => {
  const { username, country, city, email, password } = req.body;
  if (!username || !country || !city || !email || !password) {
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
    country,
    city,
    email,
    password: hashedPassword,
  });

  // Send response
  if (user) {
    // 201: Resource successfully created
    res.status(201).json({
      _id: user.id,
      username: user.username,
      country: user.country,
      city: user.city,
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
      token: jwtGenerator(userInDB._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Get all users
// @route GET /api/users/all
// @access Public
const getAllusers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).send(users);
});

// @desc Get self user info
// @route POST /api/users/self
// @access Public
const getSelf = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400);
    throw new Error("Get self error");
  }
});

// @desc Edit user
// @route PUT /api/users/edit
// @access Private
const editUser = asyncHandler(async (req, res) => {
  const { username, country, city, email } = req.body;
  const change = {};
  if (username.length) {
    change["username"] = username;
  }
  if (country.length) {
    change["country"] = country;
  }
  if (city.length) {
    change["city"] = city;
  }
  if (email.length) {
    change["email"] = email;
  }
  try {
    await User.findByIdAndUpdate(req.user._id, change);
    res.send();
  } catch (err) {
    res.status(400);
    throw new Error("Something went wrong from mongoDB");
  }
});

module.exports = {
  signupUser,
  loginUser,
  getAllusers,
  getSelf,
  editUser,
};

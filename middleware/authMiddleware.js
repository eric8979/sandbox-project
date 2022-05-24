const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const authHandler = asyncHandler(async (req, res, next) => {
  // Check if token exists
  if (!req.headers.authorization) {
    res.status(401);
    throw new Error("Not authorized");
  }

  // Evaluate the token
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET,
    function (err, decoded) {
      if (err) {
        res.status(401);
        throw new Error("Not authorized");
      }
      return decoded;
    }
  );

  const user = await User.findById(decoded.id).select("-password");
  req.user = user;
  return next();
});

module.exports = { authHandler };

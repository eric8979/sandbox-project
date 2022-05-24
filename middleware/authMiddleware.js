const jwt = require("jsonwebtoken");

const authHandler = (err, req, res, next) => {
  next();
};

module.exports = { authHandler };

const jwt = require("jsonwebtoken");

const jwtGenerator = (id) => {
  // https://github.com/auth0/node-jsonwebtoken
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "2 days" });
  return token;
};

module.exports = { jwtGenerator };

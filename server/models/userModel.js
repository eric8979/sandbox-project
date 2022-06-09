const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

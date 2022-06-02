const mongoose = require("mongoose");

const chatroomSchema = mongoose.Schema(
  {
    roomName: {
      type: String,
      required: [true, "Please add chatroom name"],
    },
    participants: [
      {
        user: {
          type: String,
          required: [true, "Please add participants"],
        },
      },
    ],
    messages: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chatroom", chatroomSchema);

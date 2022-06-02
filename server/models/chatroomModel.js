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
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chatroom", chatroomSchema);

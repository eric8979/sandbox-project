const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Chatroom",
  },
  conversation: [
    {
      message: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);

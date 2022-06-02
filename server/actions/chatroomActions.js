const asyncHandler = require("express-async-handler");

// @desc Create chatroom
// @route POST /api/chats
// @access Private
const createChatroom = asyncHandler(async (req, res) => {
  return;
});

// @desc Delete chatroom
// @route DELETE /api/chats
// @access Private
const delChatroom = asyncHandler(async (req, res) => {
  return;
});

module.exports = {
  createChatroom,
  delChatroom,
};

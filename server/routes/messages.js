const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createMessage,
  getMessage,
  deleteMessage,
  likeMessage
} = require("../handlers/messages");

router.route("/").post(createMessage);

router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage)
  .put(likeMessage);

module.exports = router;

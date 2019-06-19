const express = require("express");
const router = express.Router({ mergeParams: true });

const { likeMessage } = require("../handlers/messages");

router.route("/:message_id").put(likeMessage);

module.exports = router;

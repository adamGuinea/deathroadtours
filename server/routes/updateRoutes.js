const express = require("express");
const router = express.Router({ mergeParams: true });

const { likeMessage } = require("../handlers/messages");

router.route("/:message_id/:current_user").put(likeMessage);

module.exports = router;

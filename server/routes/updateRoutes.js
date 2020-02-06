const express = require("express");
const router = express.Router({ mergeParams: true });

const { likeMessage } = require("../handlers/messages");
const { unlikeMessage } = require("../handlers/messages");

router.route("/like/:message_id").put(likeMessage);
router.route("/unlike/:message_id").put(unlikeMessage);

module.exports = router;

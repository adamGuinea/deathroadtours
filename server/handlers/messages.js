const db = require("../models");

exports.createMessage = async function(req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);
    await foundUser.save();
    let foundMessage = await db.Message.findById(message._id).populate("user", {
      username: true,
      profileImageUrl: true,
      likes: true
    });
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.getMessage = async function(req, res, next) {
  try {
    let message = await db.Message.find(req.params.message_id);
    console.log("found ur msgs");
    return res.status(200).json(message);
  } catch (err) {
    return next(err);
  }
};

exports.deleteMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.likeMessage = async function(req, res, next) {
  try {
    let like = await db.Message.update(
      req.params.message_id,
      req.body,
      {
        $inc: { "message.$.likes": 1 }
      },
      { new: true }
    );
    console.log("updated like");
    await like.save();
    return res.status(200).json(like);
  } catch (err) {
    return next(err);
  }
};

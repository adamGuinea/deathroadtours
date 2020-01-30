import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchMessages,
  removeMessage,
  likeMessage
} from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { listData, removeMessage, currentUser, likeMessage } = this.props;
    let messageList = listData.messages.map(m => (
      <MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        likes={m.likes}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        likeMessage={() => likeMessage(m._id, currentUser)}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={currentUser === m.user._id}
      />
    ));
    return <ul className="message">{messageList}</ul>;
  }
}
const mapStateToProps = state => {
  return {
    listData: state.messages,
    currentUser: state.currentUser.user.id
  };
};

export default connect(mapStateToProps, {
  fetchMessages,
  likeMessage,
  removeMessage
})(MessageList);

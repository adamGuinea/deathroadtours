import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = () => {
  return (
    <div className="timeline">
      <UserAside />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;

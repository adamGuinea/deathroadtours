import React, { Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

let hRef = "#";

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  removeMessage,
  isCorrectUser
}) => (
  <Fragment>
    <li className="message__item">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        height="100"
        width="100"
        className="message__image"
      />
      <div className="message__area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="message__date">
          <Moment format="Do MM YYYY">{date}</Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (
          <a className="btn" href={hRef} onClick={removeMessage}>
            Delete
          </a>
        )}
      </div>
    </li>
  </Fragment>
);

export default MessageItem;

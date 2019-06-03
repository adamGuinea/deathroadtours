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
  isCorrectUser,
  receiveLike
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
        <span className="message__area-date">
          <Moment format="Do MM YYYY">{date}</Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (
          <a className="btn" href={hRef} onClick={removeMessage}>
            Delete
          </a>
        )}
        {receiveLike && (
          <Fragment>
            <div tabindex="1" className="message__area-like">
              <svg className="message__area-like-icon">
                <use xlinkHref="/sprite.svg#icon-thumbs-up" />
              </svg>
            </div>
            <span className="message__item-notification">1</span>
          </Fragment>
        )}
      </div>
    </li>
  </Fragment>
);

export default MessageItem;

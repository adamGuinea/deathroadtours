import React, { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

let hRef = "#";

class MessageItem extends Component {
  state = { showLikes: true };

  handleLike = () => {
    this.setState({
      showLikes: true
    });
    this.props.likeMessage();
  };

  handleUnlike = () => {
    this.setState({
      showLikes: true
    });
    this.props.unlikeMessage();
  };

  render() {
    const {
      date,
      profileImageUrl,
      text,
      username,
      likes,
      removeMessage,
      isCorrectUser,
      currentUser
    } = this.props;

    const hasLiked = likes
      .map(({ user }) => user === currentUser)
      .toString()
      .includes(true);

    return (
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
            {!isCorrectUser && (
              <Fragment>
                <div
                  tabIndex="1"
                  onClick={this.handleLike}
                  className="message__area-like"
                >
                  <svg className="message__area-like-icon">
                    <use xlinkHref="/sprite.svg#icon-thumbs-up" />
                  </svg>
                </div>
                {hasLiked && (
                  <div
                    tabIndex="1"
                    onClick={this.handleUnlike}
                    className="message__area-unlike"
                  >
                    <svg className="message__area-unlike-icon">
                      <use xlinkHref="/sprite.svg#icon-thumbs-up" />
                    </svg>
                  </div>
                )}
                {this.state.showLikes
                  ? likes.length > 0 && (
                      <span className="message__item-notification">
                        {likes.length}
                      </span>
                    )
                  : null}
              </Fragment>
            )}
          </div>
        </li>
      </Fragment>
    );
  }
}

export default MessageItem;

import React, { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { increaseLike, fetchMessages } from "../store/actions/messages";
import { connect } from "react-redux";

let hRef = "#";

class MessageItem extends Component {
  state = { likes: 0, showLikes: false };

  handleClick = event => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  handleOnLike = event => {
    this.setState({
      showLikes: true,
      likes: this.state.likes + 1
    });
    this.props.increaseLike(this.props.likes, this.props.id);
  };

  render() {
    const {
      date,
      profileImageUrl,
      text,
      username,
      removeMessage,
      isCorrectUser,
      receiveLike
    } = this.props;

    console.log(this.props);

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
            {receiveLike && (
              <Fragment>
                <div onClick={this.handleOnLike} className="message__area-like">
                  <svg className="message__area-like-icon">
                    <use xlinkHref="/sprite.svg#icon-thumbs-up" />
                  </svg>
                </div>
                {this.state.showLikes ? (
                  <span className="message__item-notification">
                    {this.state.likes}
                  </span>
                ) : null}
              </Fragment>
            )}
          </div>
        </li>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    likes: state.likes
  };
}

export default connect(
  mapStateToProps,
  { increaseLike, fetchMessages }
)(MessageItem);

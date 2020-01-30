import React, { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

let hRef = "#";

class MessageItem extends Component {
  state = { showLikes: true };

  handleOnLike = () => {
    this.setState({
      showLikes: true
    });
    this.props.likeMessage();
  };

  render() {
    const {
      date,
      profileImageUrl,
      text,
      username,
      likes,
      removeMessage,
      isCorrectUser
    } = this.props;

    return (
      <Fragment>
        <li className='message__item'>
          <img
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            height='100'
            width='100'
            className='message__image'
          />
          <div className='message__area'>
            <Link to='/'>@{username} &nbsp;</Link>
            <span className='message__area-date'>
              <Moment format='Do MM YYYY'>{date}</Moment>
            </span>
            <p>{text}</p>
            {isCorrectUser && (
              <a className='btn' href={hRef} onClick={removeMessage}>
                Delete
              </a>
            )}
            {!isCorrectUser && (
              <Fragment>
                <div
                  tabIndex='1'
                  onClick={this.handleOnLike}
                  className='message__area-like'
                >
                  <svg className='message__area-like-icon'>
                    <use xlinkHref='/sprite.svg#icon-thumbs-up' />
                  </svg>
                </div>
                {this.state.showLikes ? (
                  likes.length > 0 && <span className='message__item-notification'>{likes.length}</span>
                ) : null}
              </Fragment>
            )}
          </div>
        </li>
      </Fragment>
    );
  }
}

export default MessageItem;

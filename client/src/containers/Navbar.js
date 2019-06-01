import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import Logo from "../images/chatta-logo.png";
let hRef = "#";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.currentUser;
    const { profileImageUrl, id } = this.props.currentUser.user;

    return (
      <header className="headers">
        <Link to="/" className="user-nav__link">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <form action={hRef} className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search availability"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref="/sprite.svg#icon-magnifying-glass" />
            </svg>
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="/sprite.svg#icon-bookmark" />
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="/sprite.svg#icon-chat" />
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <span className="user-nav__user-name">
              {isAuthenticated ? (
                <Link
                  to={`/users/${id}/messages/new`}
                  className="user-nav__link"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>New Message</li>
                  </ul>
                </Link>
              ) : (
                <Link to="/signup" className="user-nav__link">
                  <ul className="nav navbar-nav navbar-right">
                    <li>Sign up</li>
                  </ul>
                </Link>
              )}
            </span>
          </div>
          <div className="user-nav__user">
            <img
              src={profileImageUrl || DefaultProfileImg}
              alt="user"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">
              {isAuthenticated ? (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a
                      onClick={this.logout}
                      href={hRef}
                      className="user-nav__link"
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/signin" className="user-nav__link">
                      Log in
                    </Link>
                  </li>
                </ul>
              )}
            </span>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

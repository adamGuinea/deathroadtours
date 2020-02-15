import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import DefaultProfileImg from "../../images/default-profile-image.jpg";
import { UserPlusSVG } from "../../images/SVG/UserPlusSVG";
import { UserSVG } from "../../images/SVG/UserSVG";
import { UserLogoutSVG } from "../../images/SVG/UserLogoutSVG";
import Logo from "../../images/chatta-logo.png";
import { Suggestions } from "./Suggestions";
import { UserNav } from "./UserNav";
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
      <header className='headers'>
        <Link to='/' className='user-nav__link'>
          <img src={Logo} alt='logo' className='logo' />
        </Link>
        <form action={hRef} className='search'>
          <input
            type='text'
            className='search__input'
            placeholder='Search availability'
          />
          <button className='search__button'>
            <svg className='search__icon'>
              <use xlinkHref='/sprite.svg#icon-magnifying-glass' />
            </svg>
          </button>
          <Suggestions />
        </form>

        <nav className='user-nav'>
          <UserNav />

          {isAuthenticated ? (
            <Fragment>
              <div className='user-nav__user'>
                <img
                  src={profileImageUrl || DefaultProfileImg}
                  alt='user'
                  className='user-nav__user-photo'
                />
                <span className='user-nav__user-name'>
                  <Link
                    to={`/users/${id}/messages/new`}
                    className='user-nav__link'
                  >
                    <ul className='nav navbar-nav navbar-right'>
                      <li>New Message</li>
                    </ul>
                  </Link>
                </span>
              </div>
              <div className='user-nav__user'>
                <span className='user-nav__user-name'>
                  <ul className='nav navbar-nav navbar-right'>
                    <li>
                      <Link
                        onClick={this.logout}
                        to={hRef}
                        className='user-nav__link'
                      >
                        <UserLogoutSVG />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </Fragment>
          ) : (
            <div className='user-nav__user'>
              <img
                src={profileImageUrl || DefaultProfileImg}
                alt='user'
                className='user-nav__user-photo'
              />
              <span className='user-nav__user-name'>Account</span>
              <div className='user-nav_profile'>
                <div className='user-nav_profile_item-box'>
                  <div className='user-nav_profile_item'>
                    <Link to='/signin' className='user-nav__link'>
                      <UserSVG />
                      Log in
                    </Link>
                  </div>
                  <div className='user-nav_profile_item'>
                    <Link to='/signup' className='user-nav__link'>
                      <UserPlusSVG />
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
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

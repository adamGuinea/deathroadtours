import React from "react";
import Logo from "../images/chatta-logo.png";
import Person1 from "../images/person-2.jpg";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

let hRef = "#";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="containers">
        <header className="headers">
          <img src={Logo} alt="logo" className="logo" />
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
              <img src={Person1} alt="user" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Humphrey</span>
            </div>
          </nav>
        </header>
        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href={hRef} className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref="/sprite.svg#icon-home" />
                  </svg>
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href={hRef} className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref="/sprite.svg#icon-aircraft" />
                  </svg>
                  <span>Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href={hRef} className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref="/sprite.svg#icon-key" />
                  </svg>
                  <span>Car rental</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href={hRef} className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref="/sprite.svg#icon-map" />
                  </svg>
                  <span>Tours</span>
                </a>
              </li>
            </ul>
            <div className="legal">&copy; 2019 Death Road Tours Bolivia</div>
          </nav>
          <main className="tour-view">Tour view</main>
        </div>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;

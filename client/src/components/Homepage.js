import React from "react";
import Logo from "../images/chatta-logo.png";
import Person1 from "../images/person-2.jpg";
import Cycle1 from "../images/cycle-1.jpg";
import Cycle2 from "../images/cycle-2.jpg";
import Cycle3 from "../images/cycle-3.jpg";
import Friend1 from "../images/friend-1.jpg";
import Friend2 from "../images/friend-2.jpg";
import Friend3 from "../images/friend-3.jpg";
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
          <main className="tour-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img src={Cycle1} alt="cyclist 1" className="gallery__photo" />
              </figure>
              <figure className="gallery__item">
                <img src={Cycle2} alt="cyclist 2" className="gallery__photo" />
              </figure>
              <figure className="gallery__item">
                <img src={Cycle3} alt="cyclist 3" className="gallery__photo" />
              </figure>
            </div>
            <div className="overview">
              <h1 className="overview__heading">
                Cycle the World's Most Dangerous Road
              </h1>
              <div className="overview__stars">
                <svg className="overview__icon-star">
                  <use xlinkHref="/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                  <use xlinkHref="/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                  <use xlinkHref="/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                  <use xlinkHref="/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                  <use xlinkHref="/sprite.svg#icon-star" />
                </svg>
              </div>
              <div className="overview__location">
                <svg className="overview__icon-location">
                  <use xlinkHref="/sprite.svg#icon-location-pin" />
                </svg>
                <button className="btn-inline">Bolivia</button>
              </div>
              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">859 Votes</div>
              </div>
            </div>

            <div className="detail">
              <div className="description">
                <p className="paragraph">
                  Our tour company will pick you up at any of the main hostels
                  or hotels, or you can meet at a predetermined point for a van
                  ride up to the peak of La Cumbre where you will start your
                  trek. The descent starts slow and mild, but savor the easy
                  first portion and use it to get used to the handling of your
                  bike, before the going gets steep and rough.
                </p>
                <p className="paragraph">
                  The downhill portion of the trip lasts a full 64 kilometers
                  (40 miles), with very few short uphills, ensuring that you’ll
                  get tired not from pedaling, but from controlling your speed,
                  taking sharp turns, and keeping your balance on thin roads
                  above massive cliffs. The route will take you from the snow
                  capped andean peaks, along winding mountainsides and cliffs,
                  sometimes over a kilometer down, to the hot Amazon jungle down
                  below.
                </p>
                <ul className="list">
                  <li className="list__item">Safety gear provided </li>
                  <li className="list__item">Standby ambulance everyday</li>
                  <li className="list__item">Knowledgeable local guides </li>
                  <li className="list__item">Dual suspension bikes</li>
                  <li className="list__item">
                    Bikes serviced after every ride
                  </li>
                  <li className="list__item">Includes buffet meal</li>
                  <li className="list__item">Pickup from your hotel</li>
                  <li className="list__item">Regular photo stops</li>
                </ul>
                <div className="recommend">
                  <p className="recommend__count">
                    Adam and 3 other friends recommend this tour.
                  </p>
                  <div className="recommend__friends">
                    <img
                      src={Person1}
                      alt="friend 1"
                      className="recommend__photo"
                    />
                    <img
                      src={Friend1}
                      alt="friend 2"
                      className="recommend__photo"
                    />
                    <img
                      src={Friend2}
                      alt="friend 3"
                      className="recommend__photo"
                    />
                    <img
                      src={Friend3}
                      alt="friend 4"
                      className="recommend__photo"
                    />
                  </div>
                </div>
              </div>
              <div className="user-reviews">user reviews</div>
            </div>
          </main>
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

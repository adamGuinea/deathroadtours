import React, { Fragment } from "react";
import Person1 from "../images/person-2.jpg";
import Cycle1 from "../images/cycle-1.jpg";
import Cycle2 from "../images/cycle-2.jpg";
import Cycle3 from "../images/cycle-3.jpg";
import Friend1 from "../images/friend-1.jpg";
import Friend2 from "../images/friend-2.jpg";
import Friend3 from "../images/friend-3.jpg";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

let videoSrc = "https://www.youtube.com/embed/dLhObpqwDWw";

let hRef = "#";

var today = new Date();
var tomorrow = new Date();

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <Fragment>
        <div className='content'>
          <nav className='sidebar'>
            <ul className='side-nav'>
              <li className='side-nav__item'>
                <a href={hRef} className='side-nav__link'>
                  <svg className='side-nav__icon'>
                    <use xlinkHref='/sprite.svg#icon-home' />
                  </svg>
                  <span>Hotel</span>
                </a>
              </li>
              <li className='side-nav__item'>
                <a href={hRef} className='side-nav__link'>
                  <svg className='side-nav__icon'>
                    <use xlinkHref='/sprite.svg#icon-aircraft' />
                  </svg>
                  <span>Flight</span>
                </a>
              </li>
              <li className='side-nav__item'>
                <a href={hRef} className='side-nav__link'>
                  <svg className='side-nav__icon'>
                    <use xlinkHref='/sprite.svg#icon-key' />
                  </svg>
                  <span>Car rental</span>
                </a>
              </li>
              <li className='side-nav__item'>
                <a href={hRef} className='side-nav__link'>
                  <svg className='side-nav__icon'>
                    <use xlinkHref='/sprite.svg#icon-map' />
                  </svg>
                  <span>Tours</span>
                </a>
              </li>
            </ul>
            <div className='legal'>&copy; 2019 Death Road Tours Bolivia</div>
          </nav>
          <main className='tour-view'>
            <div className='gallery'>
              <figure className='gallery__item'>
                <img src={Cycle1} alt='cyclist 1' className='gallery__photo' />
              </figure>
              <figure className='gallery__item'>
                <img src={Cycle2} alt='cyclist 2' className='gallery__photo' />
              </figure>
              <figure className='gallery__item'>
                <img src={Cycle3} alt='cyclist 3' className='gallery__photo' />
              </figure>
            </div>
            <div className='overview'>
              <h1 className='overview__heading'>
                Cycle the World's Most Dangerous Road
              </h1>
              <div className='overview__stars'>
                <svg className='overview__icon-star'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='overview__location'>
                <svg className='overview__icon-location'>
                  <use xlinkHref='/sprite.svg#icon-location-pin' />
                </svg>
                <button className='btn-inline'>Yungas, Bolivia</button>
              </div>
              <div className='overview__rating'>
                <div className='overview__rating-average'>8.6</div>
                <div className='overview__rating-count'>859 Votes</div>
              </div>
            </div>

            <div className='detail'>
              <div className='description'>
                <p className='paragraph'>
                  Our tour company will pick you up at any of the main hostels
                  or hotels, or you can meet at a predetermined point for a van
                  ride up to the peak of La Cumbre where you will start your
                  trek. The descent starts slow and mild, but savor the easy
                  first portion and use it to get used to the handling of your
                  bike, before the going gets steep and rough.
                </p>
                <p className='paragraph'>
                  The downhill portion of the trip lasts a full 64 kilometers
                  (40 miles), with very few short uphills, ensuring that you’ll
                  get tired not from pedaling, but from controlling your speed,
                  taking sharp turns, and keeping your balance on thin roads
                  above massive cliffs. The route will take you from the snow
                  capped andean peaks, along winding mountainsides and cliffs,
                  sometimes over a kilometer down, to the hot Amazon jungle down
                  below.
                </p>
                <ul className='list'>
                  <li className='list__item'>Safety gear provided </li>
                  <li className='list__item'>Standby ambulance everyday</li>
                  <li className='list__item'>Knowledgeable local guides </li>
                  <li className='list__item'>Dual suspension bikes</li>
                  <li className='list__item'>
                    Bikes serviced after every ride
                  </li>
                  <li className='list__item'>Includes buffet meal</li>
                  <li className='list__item'>Pickup from your hotel</li>
                  <li className='list__item'>Regular photo stops</li>
                </ul>
                <div
                  className='tour-video'
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    marginBottom: "3rem",
                    paddingTop: "3rem",
                    height: 0
                  }}
                >
                  <iframe
                    title='tour video'
                    className='tour-video__player'
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src={videoSrc}
                    frameBorder='0'
                  />
                </div>
                <div className='recommend'>
                  <p className='recommend__count'>
                    Adam and 3 other friends recommend this tour.
                  </p>
                  <div className='recommend__friends'>
                    <img
                      src={Person1}
                      alt='friend 1'
                      className='recommend__photo'
                    />
                    <img
                      src={Friend1}
                      alt='friend 2'
                      className='recommend__photo'
                    />
                    <img
                      src={Friend2}
                      alt='friend 3'
                      className='recommend__photo'
                    />
                    <img
                      src={Friend3}
                      alt='friend 4'
                      className='recommend__photo'
                    />
                  </div>
                </div>
              </div>
              <div className='user-reviews'>
                <figure className='review'>
                  <blockquote className='review__text'>
                    The North Yungas road is truly treacherous but the views
                    were 1000% worth it.
                  </blockquote>
                  <figcaption className='review__user'>
                    <img
                      src={Friend2}
                      alt='review 1'
                      className='review__photo'
                    />
                    <div className='review__user-box'>
                      <p className='review__user-name'>Jack Reacher</p>
                      <p className='review__user-date'>Feb 18, 2019</p>
                    </div>
                    <div className='review__rating'>8.9</div>
                  </figcaption>
                </figure>
                <figure className='review'>
                  <blockquote className='review__text'>
                    The guides made sure noone was left behind and were super
                    helpful at pointing out the perfect photo opportunities.
                  </blockquote>
                  <figcaption className='review__user'>
                    <img
                      src={Friend3}
                      alt='review 2'
                      className='review__photo'
                    />
                    <div className='review__user-box'>
                      <p className='review__user-name'>Jane Holloway</p>
                      <p className='review__user-date'>Jan 30, 2019</p>
                    </div>
                    <div className='review__rating'>8.2</div>
                  </figcaption>
                </figure>
                <button className='btn-inline'>
                  Show all <span>&rarr;</span>
                </button>
              </div>
            </div>
            <div className='cta'>
              <h2 className='cta__book-now'>
                {" "}
                5 spots left for the{" "}
                <Moment format='Do MMM YYYY'>
                  {tomorrow.setDate(today.getDate() + 1)}
                </Moment>
              </h2>
              <Link to='/signup' className='btn'>
                <span className='btn__visible'>Join the chat</span>
                <span className='btn__invisible'>Only 5 spaces left!</span>
              </Link>
            </div>
          </main>
        </div>
      </Fragment>
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

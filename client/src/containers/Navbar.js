import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import hotel1 from "../images/hotel-1.jpg";
import hotel2 from "../images/hotel-2.jpg";
import hotel3 from "../images/hotel-3.jpg";
import hotel4 from "../images/hotel-4.jpg";
import hotel5 from "../images/hotel-5.jpg";
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

          <div className='suggestion'>
            <div className='suggestion__item'>
              <div className='suggestion__photo-box'>
                <img
                  src={hotel1}
                  alt='Chalalán Ecolodge'
                  className='suggestion__photo'
                />
              </div>
              <div className='suggestion__info-box'>
                <h3 className='suggestion__name'>Chalalán Ecolodge</h3>
                <p className='suggestion__location'>Parque Nacional Madidi</p>
              </div>
              <div className='overview__stars'>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='suggestion__rating-average'>5.0</div>
            </div>
            <div className='suggestion__item'>
              <div className='suggestion__photo-box'>
                <img
                  src={hotel2}
                  alt='Loki Hostel'
                  className='suggestion__photo'
                />
              </div>
              <div className='suggestion__info-box'>
                <h3 className='suggestion__name'>Loki Hostel</h3>
                <p className='suggestion__location'>La Paz, Bolivia</p>
              </div>
              <div className='overview__stars'>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='suggestion__rating-average'>4.3</div>
            </div>
            <div className='suggestion__item'>
              <div className='suggestion__photo-box'>
                <img
                  src={hotel3}
                  alt='La Posada'
                  className='suggestion__photo'
                />
              </div>
              <div className='suggestion__info-box'>
                <h3 className='suggestion__name'>La Posada</h3>
                <p className='suggestion__location'>Sucre, Bolivia</p>
              </div>
              <div className='overview__stars'>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='suggestion__rating-average'>4.0</div>
            </div>
            <div className='suggestion__item'>
              <div className='suggestion__photo-box'>
                <img
                  src={hotel4}
                  alt='Las Olas'
                  className='suggestion__photo'
                />
              </div>
              <div className='suggestion__info-box'>
                <h3 className='suggestion__name'>Las Olas</h3>
                <p className='suggestion__location'>Lake Titicaca</p>
              </div>
              <div className='overview__stars'>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='suggestion__rating-average'>3.9</div>
            </div>
            <div className='suggestion__item'>
              <div className='suggestion__photo-box'>
                <img src={hotel5} alt='Nomada' className='suggestion__photo' />
              </div>
              <div className='suggestion__info-box'>
                <h3 className='suggestion__name'>Nomada</h3>
                <p className='suggestion__location'>Santa Cruz, Bolivia</p>
              </div>
              <div className='overview__stars'>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
                <svg className='overview__icon-star suggestion__stars'>
                  <use xlinkHref='/sprite.svg#icon-star' />
                </svg>
              </div>
              <div className='suggestion__rating-average'>4.8</div>
            </div>
          </div>
        </form>

        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref='/sprite.svg#icon-bookmark' />
            </svg>
            <span className='user-nav__notification'>3</span>

            <div className='user-nav_chat'>
              <h2 className='user-nav_chat_head'>Bookmarks</h2>
              <div className='user-nav_chat_item user-nav_chat_item--highlighted'>
                <img
                  src={hotel5}
                  alt='Nomada'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Laurie Daly</p>
                  <p className='user-nav_chat_preview'>
                    Rugby League is a simple...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>12:15pm</div>
                  <p className='user-nav_chat_date'>Oct 8, 2018</p>
                </div>
              </div>
              <div className='user-nav_chat_item'>
                <img
                  src={hotel4}
                  alt='Las Olas'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Marie Curie</p>
                  <p className='user-nav_chat_preview'>
                    One never notices what has...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>5:53pm</div>
                  <p className='user-nav_chat_date'>Oct 1, 2018</p>
                </div>
              </div>
              <div className='user-nav_chat_item'>
                <img
                  src={hotel3}
                  alt='La Posada'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>John Von Neumann</p>
                  <p className='user-nav_chat_preview'>
                    Young man, in mathematics...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>2:36am</div>
                  <p className='user-nav_chat_date'>Sept 14, 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref='/sprite.svg#icon-chat' />
            </svg>
            <span className='user-nav__notification'>4</span>

            <div className='user-nav_chat'>
              <h2 className='user-nav_chat_head'>Messages</h2>
              <div className='user-nav_chat_item user-nav_chat_item--highlighted'>
                <img
                  src={hotel2}
                  alt='Loki Hostel'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Jerry Seinfeld</p>
                  <p className='user-nav_chat_preview'>
                    Sometimes the road less...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>12:15pm</div>
                  <p className='user-nav_chat_date'>Oct 8, 2018</p>
                </div>
              </div>
              <div className='user-nav_chat_item user-nav_chat_item--highlighted'>
                <img
                  src={hotel1}
                  alt='Chalalán Ecolodge'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Allen Iverson</p>
                  <p className='user-nav_chat_preview'>
                    I surround myself with...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>5:53am</div>
                  <p className='user-nav_chat_date'>Oct 1, 2018</p>
                </div>
              </div>
              <div className='user-nav_chat_item'>
                <img
                  src={hotel5}
                  alt='Nomada'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Eric Schmidt</p>
                  <p className='user-nav_chat_preview'>
                    A mind set in its ways is...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>2:36pm</div>
                  <p className='user-nav_chat_date'>Sept 14, 2018</p>
                </div>
              </div>

              <div className='user-nav_chat_item'>
                <img
                  src={hotel2}
                  alt='Loki Hostel'
                  className='user-nav_chat_photo'
                />
                <div className='user-nav_chat_info-box'>
                  <p className='user-nav_chat_name'>Stefani Germanotta</p>
                  <p className='user-nav_chat_preview'>
                    If you dont have any shadows...
                  </p>
                </div>
                <div className='user-nav_chat_timestamp'>
                  <div className='user-nav_chat_time'>10:18am</div>
                  <p className='user-nav_chat_date'>Sept 14, 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div className='user-nav__user'>
            <span className='user-nav__user-name'>
              {isAuthenticated ? (
                <Link
                  to={`/users/${id}/messages/new`}
                  className='user-nav__link'
                >
                  <ul className='nav navbar-nav navbar-right'>
                    <li>New Message</li>
                  </ul>
                </Link>
              ) : (
                <Link to='/signup' className='user-nav__link'>
                  <ul className='nav navbar-nav navbar-right'>
                    <li>Sign up</li>
                  </ul>
                </Link>
              )}
            </span>
          </div>
          <div className='user-nav__user'>
            <img
              src={profileImageUrl || DefaultProfileImg}
              alt='user'
              className='user-nav__user-photo'
            />
            <span className='user-nav__user-name'>
              {isAuthenticated ? (
                <ul className='nav navbar-nav navbar-right'>
                  <li>
                    <a
                      onClick={this.logout}
                      href={hRef}
                      className='user-nav__link'
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className='nav navbar-nav navbar-right'>
                  <li>
                    <Link to='/signin' className='user-nav__link'>
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

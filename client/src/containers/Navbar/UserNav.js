import React, { Fragment } from "react";
import hotel1 from "../../images/hotel-1.jpg";
import hotel2 from "../../images/hotel-2.jpg";
import hotel3 from "../../images/hotel-3.jpg";
import hotel4 from "../../images/hotel-4.jpg";
import hotel5 from "../../images/hotel-5.jpg";

export const UserNav = () => {
  return (
    <Fragment>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="/sprite.svg#icon-bookmark" />
        </svg>
        <span className="user-nav__notification">3</span>

        <div className="user-nav_chat">
          <h2 className="user-nav_chat_head">Bookmarks</h2>
          <div className="user-nav_chat_item user-nav_chat_item--highlighted">
            <img src={hotel5} alt="Nomada" className="user-nav_chat_photo" />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Laurie Daly</p>
              <p className="user-nav_chat_preview">
                Rugby League is a simple...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">12:15pm</div>
              <p className="user-nav_chat_date">Oct 8, 2018</p>
            </div>
          </div>
          <div className="user-nav_chat_item">
            <img src={hotel4} alt="Las Olas" className="user-nav_chat_photo" />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Marie Curie</p>
              <p className="user-nav_chat_preview">
                One never notices what has...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">5:53pm</div>
              <p className="user-nav_chat_date">Oct 1, 2018</p>
            </div>
          </div>
          <div className="user-nav_chat_item">
            <img src={hotel3} alt="La Posada" className="user-nav_chat_photo" />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">John Von Neumann</p>
              <p className="user-nav_chat_preview">
                Young man, in mathematics...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">2:36am</div>
              <p className="user-nav_chat_date">Sept 14, 2018</p>
            </div>
          </div>
        </div>
      </div>

      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="/sprite.svg#icon-chat" />
        </svg>
        <span className="user-nav__notification">4</span>

        <div className="user-nav_chat">
          <h2 className="user-nav_chat_head">Messages</h2>
          <div className="user-nav_chat_item user-nav_chat_item--highlighted">
            <img
              src={hotel2}
              alt="Loki Hostel"
              className="user-nav_chat_photo"
            />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Jerry Seinfeld</p>
              <p className="user-nav_chat_preview">
                Sometimes the road less...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">12:15pm</div>
              <p className="user-nav_chat_date">Oct 8, 2018</p>
            </div>
          </div>
          <div className="user-nav_chat_item user-nav_chat_item--highlighted">
            <img
              src={hotel1}
              alt="Chalalán Ecolodge"
              className="user-nav_chat_photo"
            />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Allen Iverson</p>
              <p className="user-nav_chat_preview">I surround myself with...</p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">5:53am</div>
              <p className="user-nav_chat_date">Oct 1, 2018</p>
            </div>
          </div>
          <div className="user-nav_chat_item">
            <img src={hotel5} alt="Nomada" className="user-nav_chat_photo" />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Eric Schmidt</p>
              <p className="user-nav_chat_preview">
                A mind set in its ways is...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">2:36pm</div>
              <p className="user-nav_chat_date">Sept 14, 2018</p>
            </div>
          </div>

          <div className="user-nav_chat_item">
            <img
              src={hotel2}
              alt="Loki Hostel"
              className="user-nav_chat_photo"
            />
            <div className="user-nav_chat_info-box">
              <p className="user-nav_chat_name">Stefani Germanotta</p>
              <p className="user-nav_chat_preview">
                If you dont have any shadows...
              </p>
            </div>
            <div className="user-nav_chat_timestamp">
              <div className="user-nav_chat_time">10:18am</div>
              <p className="user-nav_chat_date">Sept 14, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

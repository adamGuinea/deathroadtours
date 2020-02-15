import React from 'react'
import hotel1 from "../../images/hotel-1.jpg";
import hotel2 from "../../images/hotel-2.jpg";
import hotel3 from "../../images/hotel-3.jpg";
import hotel4 from "../../images/hotel-4.jpg";
import hotel5 from "../../images/hotel-5.jpg";

export const Suggestions = () => {
  return (
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
  )
}

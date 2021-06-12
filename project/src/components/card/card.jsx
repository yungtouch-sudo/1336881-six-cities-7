import React from 'react';

import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


Card.propTypes = {
  detail: PropTypes.object.isRequired,
};

function Card(props) {
  return (
    <article className='cities__place-card place-card'>
      <div className='place-card__mark'>
        <span>Premium</span>
      </div>
      <div className='cities__image-wrapper place-card__image-wrapper'>
          <Link to={'offer/' + props.detail.id}>
            <img className='place-card__image' src={props.detail.previewImage} width='260' height='200' alt='Some place' />
          </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{props.detail.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: '80%' }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href={'/'}> {props.detail.title} </a>
        </h2>
        <p className='place-card__type'>{props.detail.type}</p>
      </div>
    </article>
  );
}

export default Card;

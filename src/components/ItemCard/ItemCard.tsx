import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemCard.scss';
import home from '../images/home.svg';
import arrowGreyRight from '../images/arrow_grey_right.svg';
import arrowBlackLeft from '../images/Stroke.svg';

export const ItemCard: React.FC = () => {
  return (
    <div className="item__card">
      <div className="path">
        <img
          src={home}
          alt="home"
          className="path__item"
        />

        <img
          src={arrowGreyRight}
          alt="arrow right"
          className="path__item"
        />

        <p
          className="path__item"
        >
          Phones
        </p>

        <img
          src={arrowGreyRight}
          alt="arrow right"
          className="path__item"
        />

        <p
          className="path__item"
        >
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <NavLink to="/" className="back__link">
        <img
          src={arrowBlackLeft}
          alt="arrow left"
          className="back__link-item"
        />

        <p>Back</p>
      </NavLink>

      <h1 className="title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="grid">
        <div className="grid__item grid__item--desktop-1-12">
          <img
            src="https://be-product-catalog.onrender.com/phones/3/image"
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

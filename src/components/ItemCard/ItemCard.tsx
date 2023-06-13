import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemCard.scss';
import home from '../images/home.svg';
import arrowGreyRight from '../images/arrow_grey_right.svg';
import arrowBlackLeft from '../images/Stroke.svg';
import colorCircle from '../images/color_circle.svg';

export const ItemCard: React.FC = () => {
  return (
    <div className="item__card">
      <div className="path">
        <img src={home} alt="home" className="path__item" />

        <img src={arrowGreyRight} alt="arrow right" className="path__item" />

        <p className="path__item">Phones</p>

        <img src={arrowGreyRight} alt="arrow right" className="path__item" />

        <p className="path__item">
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

      <h1 className="title">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>

      <div className="section__photo">
        <img
          src="https://be-product-catalog.onrender.com/phones/8/image"
          alt="phone"
          className="phone"
        />

        <div className="section__photo-container">
          <img
            src="https://be-product-catalog.onrender.com/phones/8/image"
            alt="phone"
            className="phone__image"
          />

          <img
            src="https://be-product-catalog.onrender.com/phones/8/image"
            alt="phone"
            className="phone__image"
          />

          <img
            src="https://be-product-catalog.onrender.com/phones/8/image"
            alt="phone"
            className="phone__image"
          />

          <img
            src="https://be-product-catalog.onrender.com/phones/8/image"
            alt="phone"
            className="phone__image"
          />

          <img
            src="https://be-product-catalog.onrender.com/phones/8/image"
            alt="phone"
            className="phone__image"
          />
        </div>
      </div>

      <div className="section__controllers">
        <div className="colors">
          <div className="controllers__title">
            <p>Available colors</p>
            <p>ID: 802390</p>
          </div>
          <div className="colors__circle-container">
            <img src={colorCircle} alt="color circle" className="colors__circle" />

            <img src={colorCircle} alt="color circle" className="colors__circle" />

            <img src={colorCircle} alt="color circle" className="colors__circle" />

            <img src={colorCircle} alt="color circle" className="colors__circle" />
          </div>
        </div>

        <div className="capacity">
          <p>Select capacity</p>
          <div className="capacity__container">
            <div className="capacity__button">64 GB</div>
            <div className="capacity__button">256 GB</div>
            <div className="capacity__button">512 GB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

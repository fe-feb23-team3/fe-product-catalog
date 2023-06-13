import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemCard.scss';
import home from '../images/home.svg';
import arrowGreyRight from '../images/arrow_grey_right.svg';
import arrowGreyLeft from '../images/arrow_grey_left.svg';
import arrowBlackLeft from '../images/Stroke.svg';
import arrowBlackRight from '../images/arrow_black_right.svg';
import colorCircle from '../images/color_circle.svg';
import favourites from '../images/favourites.svg';

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

      <div className="photo">
        <img
          src="https://be-product-catalog.onrender.com/phones/8/image"
          alt="phone"
          className="phone"
        />

        <div className="photo-container">
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

      <div className="controllers">
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

        <div className="price">
          <span className="price__new">$799</span>
          <span className="price__old">$1119</span>
        </div>

        <div className="add-to-cart">
          <button
            type="button"
            className="add-to-cart__button"
          >
            Add to cart
          </button>
          <img
            src={favourites}
            alt="favourites"
            className="add-to-cart__favourites"
          />
        </div>

        <div className="characteristics">
          <div className="characteristics__title">
            <p>Screen</p>
            <p>Resolution</p>
            <p>Processor</p>
            <p>RAM</p>
          </div>

          <div className="characteristics__description">
            <p>6.5” OLED</p>
            <p>2688x1242</p>
            <p>Apple A12 Bionic</p>
            <p>3 GB</p>
          </div>
        </div>

        <div className="about">
          <h2 className="about__title">About</h2>
          <h3 className="about__paragraph-title">And then there was Pro</h3>

          <p className="about__text">
            A transformative triple&#8211;camera system that adds tons of capability
            without complexity.
          </p>

          <p className="about__text">
            An unprecedented leap in battery life.
            And a mind&#8211;blowing chip that doubles down on machine learning
            and pushes the boundaries of what a smartphone can do. Welcome
            to the first iPhone powerful enough to be called Pro.
          </p>

          <h3 className="about__paragraph-title">Camera</h3>

          <p className="about__text">
            Meet the first triple&#8211;camera system to combine cutting&#8211;edge
            technology with the legendary simplicity of iPhone. Capture up
            to four times more scene. Get beautiful images in drastically
            lower light. Shoot the highest&#8211;quality video in a smartphone — then
            edit with the same tools you love for photos. You&#39;ve never shot with
            anything like it.
          </p>

          <h3 className="about__paragraph-title">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
          </h3>

          <p className="about__text">
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and cinematic
            video stabilization — all at 60 fps. You get more creative control, too,
            with four times more scene and powerful new editing tools to play with.
          </p>
        </div>

        <div className="tech-specs">
          <h2 className="tech-specs__title">Tech specs</h2>
          <div className="tech-specs__container">
            <div className="tech-specs__name">
              <p>Screen</p>
              <p>Resolution</p>
              <p>Processor</p>
              <p>RAM</p>
              <p>Built in memory</p>
              <p>Camera</p>
              <p>Zoom</p>
              <p>Cell</p>
            </div>

            <div className="tech-specs__description">
              <p>6.5” OLED</p>
              <p>2688x1242</p>
              <p>Apple A12 Bionic</p>
              <p>3 GB</p>
              <p>64 GB</p>
              <p>12 Mp + 12 Mp + 12 Mp (Triple)</p>
              <p>Optical, 2x</p>
              <p>GSM, LTE, UMTS</p>
            </div>
          </div>
        </div>

        <div className="recomended">
          <div className="recomended__container">
            <h2 className="recomended__title">You may also like</h2>

            <div className="arrow">
              <img
                src={arrowGreyLeft}
                alt="arrow left"
                className="arrow-icon arrow-icon--grey"
              />

              <img
                src={arrowBlackRight}
                alt="arrow right"
                className="arrow-icon arrow-icon--black"
              />
            </div>
          </div>
        </div>

        <div className="empty__card">Place for card</div>
      </div>
    </div>
  );
};

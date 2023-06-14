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

        <p className="path__item-text">Phones</p>

        <img src={arrowGreyRight} alt="arrow right" className="path__item" />

        <p className="path__item-text">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <NavLink to="/" className="back__link">
        <img
          src={arrowBlackLeft}
          alt="arrow left"
          className="back__link-item"
        />

        <p className="back__link-name">Back</p>
      </NavLink>

      <h1 className="title">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h1>

      <div className="grid">
        <div
          className="
          phone__photo-wraper
          grid__item--desktop-1-12
          grid__item--tablet-1-7
          grid__item--phone-1-4"
        >
          <div
            className="
            grid__item--desktop-3-10
            grid__item--tablet-3-7
            grid__item--phone-1-4"
          >
            <div className="phone__photo">
              <img
                src="https://be-product-catalog.onrender.com/phones/8/image"
                alt="phone"
                className="phone__photo--main"
              />
            </div>
          </div>

          <div
            className="
            grid__item--desktop-1-2
            grid__item--tablet-1-2
            grid__item--phone-1-4"
          >
            <div className="phone__photo-container">
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
            </div>
          </div>
        </div>

        <div
          className="
          grid__item--desktop-13-19
          grid__item--tablet-8-12
          grid__item--phone-1-4"
        >
          <div className="controllers">
            <div className="colors">
              <div className="controllers__title">
                <p>Available colors</p>
                <p>ID: 802390</p>
              </div>
              <div className="colors__circle-container">
                <img
                  src={colorCircle}
                  alt="color circle"
                  className="colors__circle"
                />

                <img
                  src={colorCircle}
                  alt="color circle"
                  className="colors__circle"
                />

                <img
                  src={colorCircle}
                  alt="color circle"
                  className="colors__circle"
                />

                <img
                  src={colorCircle}
                  alt="color circle"
                  className="colors__circle"
                />
              </div>
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
            <button type="button" className="add-to-cart__button">
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
              <p className="characteristics__item">Screen</p>
              <p className="characteristics__item">Resolution</p>
              <p className="characteristics__item">Processor</p>
              <p className="characteristics__item">RAM</p>
            </div>

            <div className="characteristics__description">
              <p className="characteristics__item">6.5” OLED</p>
              <p className="characteristics__item">2688x1242</p>
              <p className="characteristics__item">Apple A12 Bionic</p>
              <p className="characteristics__item">3 GB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div
          className="
          grid__item--desktop-1-11
          grid__item--tablet-1-12
          grid__item--phone-1-4"
        >
          <div className="about">
            <h2 className="about__title">About</h2>
            <h3 className="about__paragraph-title">And then there was Pro</h3>

            <p className="about__text">
              A transformative triple&#8211;camera system that adds tons of
              capability without complexity.
            </p>

            <p className="about__text">
              An unprecedented leap in battery life. And a mind&#8211;blowing
              chip that doubles down on machine learning and pushes the
              boundaries of what a smartphone can do. Welcome to the first
              iPhone powerful enough to be called Pro.
            </p>

            <h3 className="about__paragraph-title">Camera</h3>

            <p className="about__text">
              Meet the first triple&#8211;camera system to combine
              cutting&#8211;edge technology with the legendary simplicity of
              iPhone. Capture up to four times more scene. Get beautiful images
              in drastically lower light. Shoot the highest&#8211;quality video
              in a smartphone — then edit with the same tools you love for
              photos. You&#39;ve never shot with anything like it.
            </p>

            <h3 className="about__paragraph-title">
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
              Love it.
            </h3>

            <p className="about__text">
              iPhone 11 Pro lets you capture videos that are beautifully true to
              life, with greater detail and smoother motion. Epic processing
              power means it can shoot 4K video with extended dynamic range and
              cinematic video stabilization — all at 60 fps. You get more
              creative control, too, with four times more scene and powerful new
              editing tools to play with.
            </p>
          </div>
        </div>

        <div
          className="
          grid__item--desktop-13-24
          grid__item--tablet-1-12
          grid__item--phone-1-4"
        >
          <div className="tech-specs">
            <h2 className="tech-specs__title">Tech specs</h2>
            <div className="tech-specs__container">
              <div className="tech-specs__name">
                <p className="tech-specs__item">Screen</p>
                <p className="tech-specs__item">Resolution</p>
                <p className="tech-specs__item">Processor</p>
                <p className="tech-specs__item">RAM</p>
                <p className="tech-specs__item">Built in memory</p>
                <p className="tech-specs__item">Camera</p>
                <p className="tech-specs__item">Zoom</p>
                <p className="tech-specs__item">Cell</p>
              </div>

              <div className="tech-specs__description">
                <p className="tech-specs__item">6.5” OLED</p>
                <p className="tech-specs__item">2688x1242</p>
                <p className="tech-specs__item">Apple A12 Bionic</p>
                <p className="tech-specs__item">3 GB</p>
                <p className="tech-specs__item">64 GB</p>
                <p className="tech-specs__item">
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </p>
                <p className="tech-specs__item">Optical, 2x</p>
                <p className="tech-specs__item">GSM, LTE, UMTS</p>
              </div>
            </div>
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
  );
};

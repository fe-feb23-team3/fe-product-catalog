import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import arrowDarkUp from '../images/arrow_dark_up.svg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink to="/" className="footer__logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="footer__links">
          <a href="https://w.forfun.com/fetch/92/9229ddab9983ab6b4082bbc7f25f58f9.jpeg" className="footer__link">
            github
          </a>
          <a href="https://w.forfun.com/fetch/b0/b0ebdaa1402892e90d28fad4e3190d22.jpeg" className="footer__link">
            contacts
          </a>
          <a href="https://w.forfun.com/fetch/e4/e46916f00da4bf755047f02b4560eb0c.jpeg" className="footer__link">
            rights
          </a>
        </div>

        <div className="footer__button">
          <button
            type="button"
            onClick={scrollToTop}
            id="top"
            className="footer__link"
          >
            Back to top
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            id="top"
            className="footer__button--icon"
          >
            <img src={arrowDarkUp} alt="/" />
          </button>
        </div>
      </div>
    </footer>
  );
};

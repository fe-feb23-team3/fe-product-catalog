import React from 'react';
import logo from '../images/logo.svg';
import arrowDarkUp from '../images/arrow_dark_up.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="/" className="footer__logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="footer__links">
          <a href="/" className="footer__link">
            github
          </a>
          <a href="/" className="footer__link">
            contacts
          </a>
          <a href="/" className="footer__link">
            rights
          </a>
        </div>

        <div className="footer__button">
          <a href="#top" className="footer__link">
            Back to top
          </a>

          <a href="#top" className="footer__button--icon">
            <img src={arrowDarkUp} alt="/" />
          </a>
        </div>
      </div>
    </footer>
  );
};

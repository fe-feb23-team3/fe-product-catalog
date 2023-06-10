import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import logo from '../images/logo.svg';
import burger from '../images/burger_menu.svg';
import cart from '../images/cart.svg';
import favourites from '../images/favourites.svg';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ minWidth: 640 });

  return (
    <div id="top" className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src={logo} alt="logo" />
        </a>

        {isMobile && (
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/phones" className="nav-link">
                  Phones
                </a>
              </li>
              <li className="nav-item">
                <a href="/tablets" className="nav-link">
                  Tablets
                </a>
              </li>
              <li className="nav-item">
                <a href="/accessories" className="nav-link">
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {isMobile ? (
        <div>
          <a href="/" className="header-icon">
            <img src={favourites} alt="/" />
          </a>
          <a href="/" className="header-icon">
            <img src={cart} alt="/" />
          </a>
        </div>
      ) : (
        <a href="/" className="header-icon">
          <img src={burger} alt="burger" />
        </a>
      )}
    </div>
  );
};

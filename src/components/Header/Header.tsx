import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import logo from '../images/logo.svg';
import burger from '../images/burger_menu.svg';
import cart from '../images/cart.svg';
import favourites from '../images/favourites.svg';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="header-logo">
          <img src={logo} alt="logo" />
        </a>

        {!isMobile && (
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link nav-link--active">
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
        )}
      </nav>

      {!isMobile ? (
        <div className="icon-container">
          <a href="/favourites" className="icon">
            <img src={favourites} alt="favourites" />
          </a>
          <a href="/cart" className="icon">
            <img src={cart} alt="cart" />
          </a>
        </div>
      ) : (
        <div className="icon-container">
          <a href="/burger" className="icon">
            <img src={burger} alt="burger" />
          </a>
        </div>
      )}
    </header>
  );
};

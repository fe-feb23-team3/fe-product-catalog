import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import menu from '../../images/burger-menu.svg';
import favourites from '../../images/favourites.svg';
import { Counter } from '../../components/Counter';
import { Menu } from '../../components/Menu';

interface Props {
  itemsCount: number;
  itemsFavourites: string[];
}

export const Header: React.FC<Props> = ({ itemsCount, itemsFavourites }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="header-logo">
          <img src={logo} alt="logo" />
        </NavLink>

        {!isMobile && (
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/phones" className="nav-link">
                Phones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/tablets" className="nav-link">
                Tablets
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/accessories" className="nav-link">
                Accessories
              </NavLink>
            </li>
          </ul>
        )}
      </nav>

      {!isMobile ? (
        <div className="icon-container">
          <NavLink to="/favourites" className="icon">
            <img src={favourites} alt="favourites" />
            {itemsFavourites.length > 0 && (
              <Counter count={itemsFavourites.length} />
            )}
          </NavLink>

          <NavLink to="/cart" className="icon">
            <img src={cart} alt="cart" />
            {itemsCount > 0 && <Counter count={itemsCount} />}
          </NavLink>
        </div>
      ) : (
        <div className="icon-container">
          <button type="button" className="header-menu-button" onClick={handleMenuClick}>
            <img src={menu} alt="burger_menu" />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <Menu
          onClose={handleCloseMenu}
          itemsCount={itemsCount}
          itemsFavourites={itemsFavourites}
        />
      )}
    </header>
  );
};

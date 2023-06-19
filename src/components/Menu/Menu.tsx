import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import classNames from 'classnames';
import close from '../../images/cross.svg';
import logo from '../../images/logo.svg';
import favourites from '../../images/favourites.svg';
import cart from '../../images/cart.svg';
import { Counter } from '../Counter';

interface Props {
  onClose: () => void;
  itemsCount: number;
  itemsFavourites: string[];
}

export const Menu: React.FC<Props> = ({
  onClose,
  itemsCount,
  itemsFavourites,
}) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div id="burger" className="menu">
      <header className="menu__header">
        <NavLink
          to="/"
          className="header-logo"
          onClick={handleClick}
        >
          <img src={logo} alt="logo" />
        </NavLink>

        <button
          type="button"
          className="menu__header__close"
          onClick={onClose}
        >
          <img src={close} alt="menu close" />
        </button>
      </header>

      <div className="menu__content">
        <nav className="menu__nav">
          <ul className="nav__list--burger">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) => classNames('nav__link--burger', {
                  'nav__link--active': isActive,
                })}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/phones"
                className={({ isActive }) => classNames('nav__link--burger', {
                  'nav__link--active': isActive,
                })}
                onClick={handleClick}
              >
                Phones
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tablets"
                className={({ isActive }) => classNames('nav__link--burger', {
                  'nav__link--active': isActive,
                })}
                onClick={handleClick}
              >
                Tablets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/accessories"
                className={({ isActive }) => classNames('nav__link--burger', {
                  'nav__link--active': isActive,
                })}
                onClick={handleClick}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="menu__icons">
          <NavLink
            to="/favourites"
            className={({ isActive }) => classNames('icons__favorite', {
              'is-active': isActive,
            })}
            onClick={handleClick}
          >
            <img src={favourites} alt="favourites" className="menu__icon" />
            {itemsFavourites.length > 0 && (
              <Counter count={itemsFavourites.length} />
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => classNames('icons__cart', {
              'is-active': isActive,
            })}
            onClick={handleClick}
          >
            <img src={cart} alt="cart" className="menu__icon" />
            {itemsCount > 0 && <Counter count={itemsCount} />}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

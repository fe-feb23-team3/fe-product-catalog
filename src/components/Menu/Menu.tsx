import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import cart from '../images/cart.svg';
import favourites from '../images/favourites.svg';
import { Counter } from '../Counter';

interface Props {
  itemsCount: number;
  itemsFavourites: string[];
}

export const Menu: React.FC<Props> = ({ itemsCount, itemsFavourites }) => (
  <nav className="menu">
    <div>
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink to="/" className="menu-link">
            Home
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/phones" className="menu-link">
            Phones
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/tablets" className="menu-link">
            Tablets
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="/accessories" className="menu-link">
            Accessories
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="menu-icon-container">
      <NavLink to="/favourites" className="menu-icon">
        <img src={favourites} alt="favourites" />
        {itemsFavourites.length > 0 && (
          <Counter count={itemsFavourites.length} />
        )}
      </NavLink>

      <NavLink to="/cart" className="menu-icon">
        <img src={cart} alt="cart" />
        {itemsCount > 0 && <Counter count={itemsCount} />}
      </NavLink>
    </div>
  </nav>
);

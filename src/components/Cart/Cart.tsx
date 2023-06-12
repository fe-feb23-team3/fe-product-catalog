import React from 'react';
import { CardOfCart } from './CardOfCart';
import { CardOfTotalPrice } from './CardOfTotalPrice';
import './Cart.scss';

export const Cart: React.FC = () => (
  <div className="cart-Page">
    <a href="#/home" className="cart-Page__back">
      Back
    </a>

    <h1 className="cart-Page__title">Cart</h1>

    <div
      className="
        cart-Page__content
        grid
        grid--desktop
      "
    >
      <div
        className="
          cart-Page__listOfCards
          grid__item--desktop-1-16
        "
      >
        {[0, 0, 0].map((element) => {
          // eslint-disable-next-line no-console
          console.log(element);

          return <CardOfCart key={Math.random()} />;
        })}
      </div>

      <div
        className="
          cart-Page__cardOfTotalPrice
          grid__item--desktop-17-24
        "
      >
        <CardOfTotalPrice />
      </div>
    </div>
  </div>
);

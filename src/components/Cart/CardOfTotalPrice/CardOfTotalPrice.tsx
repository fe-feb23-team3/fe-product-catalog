import React from 'react';
import './CardOfTotalPrice.scss';

export const CardOfTotalPrice: React.FC = () => {
  return (
    <div className="totalPrice">
      <p className="totalPrice__title">$2657</p>

      <p className="totalPrice__count">Total for 3 items</p>

      <div className="totalPrice__hr" />

      <button type="button" className="totalPrice__button">
        Checkout
      </button>
    </div>
  );
};

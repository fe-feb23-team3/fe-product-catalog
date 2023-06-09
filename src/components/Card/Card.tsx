import React from 'react';
import phone_1 from '../images/phone_1.png';

export const Card: React.FC = () => {
  return (
    <div className="card">

      <img
        src={phone_1}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        className="card__photo"
      />

      <h2 className="card__title">Apple iPhone 14 Pro 128GB Silver (MQ023)</h2>

      <p className="card__price">$999</p>

      <div className="card__divider"></div>

      <div className="card__specs">
        <div className="card__spec">
          <p className="card__spec-title">Screen</p>
          <p className="card__spec-value">6.1” OLED</p>
        </div>
        <div className="card__spec">
          <p className="card__spec-title">Capacity</p>
          <p className="card__spec-value">128 GB</p>
        </div>
        <div className="card__spec">
          <p className="card__spec-title">RAM</p>
          <p className="card__spec-value">6 GB</p>
        </div>
      </div>

      <div className="card__buttons">
        <a href="/" className="card__buttons-addToCart">Add to cart</a>
        <div className="card__buttons-AddToFavourites"></div>
      </div>
    </div>
  );
};

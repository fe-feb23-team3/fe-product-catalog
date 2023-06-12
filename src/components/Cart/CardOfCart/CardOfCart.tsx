import React from 'react';
import image from '../../images/phone.png';
import './CardOfCart.scss';

export const CardOfCart: React.FC = () => {
  return (
    <div className="cardOfCart">
      <div className="cardOfCart__header">
        <button type="button" className="cardOfCart__close">
          {' '}
        </button>

        <img src={image} alt="Phone" className="cardOfCart__photo" />

        <p className="cardOfCart__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>

      <div className="cardOfCart__footer">
        <div className="counter">
          <button
            type="button"
            className="counter__button counter__button--minus"
          >
            {' '}
          </button>

          <p className="counter__amount">1</p>

          <button
            type="button"
            className="counter__button counter__button--plus"
          >
            {' '}
          </button>
        </div>

        <p className="cardOfCart__price">$999</p>
      </div>
    </div>
  );
};

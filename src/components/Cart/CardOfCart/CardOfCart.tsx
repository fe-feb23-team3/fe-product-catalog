import React from 'react';
import { PhoneData } from '../../../types/phoneData';
import './CardOfCart.scss';

interface Props {
  phone: PhoneData;
}

export const CardOfCart: React.FC<Props> = ({ phone }) => {
  return (
    <div className="cardOfCart">
      <div className="cardOfCart__header">
        <button type="button" className="cardOfCart__close">
          {' '}
        </button>

        <img src={`https://be-product-catalog.onrender.com/phones/${phone.id}/image`} alt={phone.name} className="cardOfCart__photo" />

        <p className="cardOfCart__title">
          {phone.name}
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

        <p className="cardOfCart__price">
          {`$${phone.price}`}
        </p>
      </div>
    </div>
  );
};

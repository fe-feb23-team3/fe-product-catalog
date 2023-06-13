import React from 'react';
import './CardOfTotalPrice.scss';
import { PhoneData } from '../../../types/phoneData';

interface Props {
  phones: PhoneData[];
}

export const CardOfTotalPrice: React.FC<Props> = ({ phones }) => {
  const count = phones.length;
  const totalPrice = phones
    .map((phone) => Number(phone.price))
    .reduce((prev, cur) => prev + cur, 0);

  return (
    <div className="totalPrice">
      <p className="totalPrice__title">{`$${totalPrice}`}</p>

      <p className="totalPrice__count">{`Total for ${count} items`}</p>

      <div className="totalPrice__hr" />

      <button type="button" className="totalPrice__button">
        Checkout
      </button>
    </div>
  );
};

import React from 'react';
import './CardOfTotalPrice.scss';
import { PhoneData } from '../../../types/phoneData';

interface Props {
  phones: PhoneData[];
  openModal: () => void;
}

export const CardOfTotalPrice: React.FC<Props> = ({ phones, openModal }) => {
  const count = phones.length;
  const totalPrice = phones
    .map((phone) => Number(phone.price))
    .reduce((prev, cur) => prev + cur, 0);

  return (
    <div className="totalPrice">
      <p className="totalPrice__title">{`$${totalPrice}`}</p>

      <p className="totalPrice__count">{`Total for ${count} items`}</p>

      <div className="totalPrice__hr" />

      <button
        type="button"
        className="totalPrice__button"
        onClick={openModal}
        disabled={count === 0}
      >
        Checkout
      </button>
    </div>
  );
};

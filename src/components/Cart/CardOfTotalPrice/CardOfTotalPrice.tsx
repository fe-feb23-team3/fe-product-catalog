import React, { useState, useEffect } from 'react';
import './CardOfTotalPrice.scss';
import { PhoneData } from '../../../types/phoneData';

interface Props {
  phones: PhoneData[];
  openModal: () => void;
}

export const CardOfTotalPrice: React.FC<Props> = ({ phones, openModal }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const itemsAndAmounts = localStorage.getItem('itemsAndAmounts');

  useEffect(() => {
    let allAmount = phones.length;

    if (itemsAndAmounts) {
      const amountAddionals = JSON.parse(itemsAndAmounts);
      const array: number[] = Object.values(amountAddionals);

      allAmount = array.reduce((prev, cur) => prev + cur, 0);
      localStorage.setItem('countItemsOfCart', allAmount.toString());
    }

    setCount(allAmount);

    const allPrice = phones
      .map((phone) => {
        if (!itemsAndAmounts) {
          return phone.price;
        }

        const amountAddionals = JSON.parse(itemsAndAmounts);

        return phone.price * amountAddionals[phone.id];
      })
      .reduce((prev, cur) => prev + cur, 0);

    setTotalPrice(allPrice);
  }, [itemsAndAmounts]);

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

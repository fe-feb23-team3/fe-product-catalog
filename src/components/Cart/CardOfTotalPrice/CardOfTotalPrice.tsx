import React, { useState, useEffect } from 'react';
import './CardOfTotalPrice.scss';
import { PhoneData } from '../../../types/phoneData';

interface Props {
  itemsCart: {id: string, count: number}[],
  products: PhoneData[];
  openModal: () => void;
}

export const CardOfTotalPrice: React.FC<Props> = ({ products, openModal, itemsCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(products.length);

  // eslint-disable-next-line no-console
  console.log(itemsCart);

  useEffect(() => {
    setTotalCount(products.length);

    const allPrice = products
      .map(({ price }) => {
        // const indexItem = itemsCart.find(item => item.id === id);

        return price;
      })
      .reduce((prev, cur) => prev + cur, 0);

    setTotalPrice(allPrice);
  }, []);

  return (
    <div className="totalPrice">
      <p className="totalPrice__title">{`$${totalPrice}`}</p>

      <p className="totalPrice__count">{`Total for ${totalCount} items`}</p>

      <div className="totalPrice__hr" />

      <button
        type="button"
        className="totalPrice__button"
        onClick={openModal}
        disabled={totalCount === 0}
      >
        Checkout
      </button>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './CardOfTotalPrice.scss';
import { PhoneData } from '../../../types/phoneData';

interface Props {
  itemsCart: { id: string; count: number }[];
  products: PhoneData[];
  openModal: () => void;
}

export const CardOfTotalPrice: React.FC<Props> = ({
  products,
  openModal,
  itemsCart,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const allCount = itemsCart
      .map(({ count }) => count)
      .reduce((prev, cur) => prev + cur, 0);

    setTotalCount(allCount);

    const allPrice = products
      .map((product) => {
        const indexItem = itemsCart.find((item) => item.id === product.itemId);

        if (!indexItem) {
          return product.price;
        }

        return product.price * indexItem.count;
      })
      .reduce((prev, cur) => prev + cur, 0);

    setTotalPrice(allPrice);
  });

  return (
    <div className="totalPrice">
      <p className="totalPrice__title">{`$${totalPrice}`}</p>

      <p className="totalPrice__count">{`Total for ${totalCount} items`}</p>

      <div className="totalPrice__hr" />

      <button
        type="button"
        className={classNames('totalPrice__button', {
          'totalPrice__button--disabled': totalCount === 0,
        })}
        onClick={openModal}
        disabled={totalCount === 0}
      >
        Checkout
      </button>
    </div>
  );
};

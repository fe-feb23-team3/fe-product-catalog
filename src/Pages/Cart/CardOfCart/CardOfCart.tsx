import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { PhoneData } from '../../../types/phoneData';
import './CardOfCart.scss';
import { ReactComponent as Minus } from '../../../images/Minus.svg';
import { ReactComponent as Plus } from '../../../images/Plus.svg';
import { ReactComponent as Close } from '../../../images/Close.svg';

interface Props {
  itemsCart: {id: string, count: number}[],
  product: PhoneData;
  onCart: (productId: string) => void;
  onCountChange: (id: string, plusOrMinus: boolean) => void;
}

export const CardOfCart: React.FC<Props> = ({
  itemsCart,
  product,
  onCart,
  onCountChange,
}) => {
  const {
    name, price, itemId,
  } = product;
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const indexItem = itemsCart.findIndex(item => item.id === itemId);
    const countOfItem = itemsCart[indexItem].count;

    setAmount(countOfItem);
  }, []);

  type ButtonEvent = { preventDefault: () => void; };

  const handleAddAmount = (event: ButtonEvent) => {
    event.preventDefault();

    const value = amount + 1;

    setAmount(() => value);
    onCountChange(itemId, true);
  };

  const handleSubtractAmount = (event: ButtonEvent) => {
    event.preventDefault();

    if (amount > 1) {
      const value = amount - 1;

      setAmount(() => value);
      onCountChange(itemId, false);
    }
  };

  const handleRemoveCard = (event: ButtonEvent) => {
    event.preventDefault();
    onCart(itemId);
  };

  return (
    <NavLink to={`/phoneCardData/${itemId}`} className="item__card__link">
      <div className="cardOfCart">
        <div className="cardOfCart__header">
          <button
            type="button"
            className="cardOfCart__close"
            onClick={handleRemoveCard}
          >
            <Close className="iconSvg" />
          </button>

          <img
            src={`https://be-product-catalog.onrender.com/products/phones/${itemId}/image`}
            alt={name}
            className="cardOfCart__photo"
          />

          <p className="cardOfCart__title">{name}</p>
        </div>

        <div className="cardOfCart__footer">
          <div className="counter">
            <button
              type="button"
              className={cn('counter__button', {
                'counter__button--active': amount > 1,
              })}
              onClick={handleSubtractAmount}
            >
              <Minus className="iconSvg" />
            </button>

            <p className="counter__amount">{amount}</p>

            <button
              type="button"
              className="counter__button counter__button--active"
              onClick={handleAddAmount}
            >
              <Plus className="iconSvg" />
            </button>
          </div>

          <p className="cardOfCart__price">{`$${price * amount}`}</p>
        </div>
      </div>
    </NavLink>
  );
};

import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { PhoneData } from '../../../types/phoneData';
import './CardOfCart.scss';
import { ReactComponent as Minus } from '../../images/Minus.svg';
import { ReactComponent as Plus } from '../../images/Plus.svg';
import { ReactComponent as Close } from '../../images/Close.svg';
import { useLocalStorage } from '../../../utils/useLocalStorage';

interface Props {
  phone: PhoneData;
  onRemove: (id: string) => void;
  onAdd: (phone: PhoneData) => void;
  onDelete: (phone: PhoneData) => void;
  onDeleteAll: (phone: PhoneData) => void;
  onCart: (productId: string) => void;
}

export const CardOfCart: React.FC<Props> = ({
  phone,
  onRemove,
  onAdd,
  onDelete,
  onDeleteAll,
  onCart,
}) => {
  const { name, id, price } = phone;
  const [amount, setAmount] = useState(1);

  const itemsAndAmounts = localStorage.getItem('itemsAndAmounts');
  const [, setItemsAndAmounts] = useLocalStorage('itemsAndAmounts', {});

  useEffect(() => {
    if (!itemsAndAmounts) {
      return;
    }

    const amountAddionals = JSON.parse(itemsAndAmounts);

    if (amountAddionals[id] === undefined) {
      return;
    }

    setAmount(amountAddionals[id]);
  }, []);

  const updateLocalStorage = () => {
    if (itemsAndAmounts) {
      const amountAddionals = JSON.parse(itemsAndAmounts);

      amountAddionals[id] = amount;

      setItemsAndAmounts(() => amountAddionals);
    } else {
      setItemsAndAmounts({});
    }
  };

  useEffect(() => {
    updateLocalStorage();
  }, [amount]);

  const handleAddAmount = () => {
    const value = amount + 1;

    setAmount(() => value);
    onAdd(phone);
  };

  const handleSubtractAmount = () => {
    if (amount > 1) {
      const value = amount - 1;

      setAmount(() => value);
      onDelete(phone);
    }
  };

  return (
    <div className="cardOfCart">
      <div className="cardOfCart__header">
        <button
          type="button"
          className="cardOfCart__close"
          onClick={() => {
            onRemove(id);
            onDeleteAll(phone);
            onCart(id);
          }}
        >
          <Close className="iconSvg" />
        </button>

        <img
          src={`https://be-product-catalog.onrender.com/products/phones/${id}/image`}
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
            onClick={() => {
              handleAddAmount();
            }}
          >
            <Plus className="iconSvg" />
          </button>
        </div>

        <p className="cardOfCart__price">{`$${price * amount}`}</p>
      </div>
    </div>
  );
};

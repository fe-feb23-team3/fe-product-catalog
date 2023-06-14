import React, { useState } from 'react';
import cn from 'classnames';
import { PhoneData } from '../../../types/phoneData';
import './CardOfCart.scss';
import { ReactComponent as Minus } from '../../images/Minus.svg';
import { ReactComponent as Plus } from '../../images/Plus.svg';
import { ReactComponent as Close } from '../../images/Close.svg';

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

  const handleAddAmount = () => {
    setAmount(() => amount + 1);
    onAdd(phone);
  };

  const handleSubtractAmount = () => {
    if (amount > 1) {
      setAmount(() => amount - 1);
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
          src={`https://be-product-catalog.onrender.com/phones/${id}/image`}
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
  );
};

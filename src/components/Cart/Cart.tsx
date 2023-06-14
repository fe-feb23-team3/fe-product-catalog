import React, { useState, useEffect } from 'react';
import { getPhoneById } from '../../api/phones';
import { CardOfCart } from './CardOfCart';
import { CardOfTotalPrice } from './CardOfTotalPrice';
import { PhoneData } from '../../types/phoneData';
import './Cart.scss';

interface Props {
  itemsCart: string[];
  onCart: (productId: string) => void;
  onCount: (length: number) => void;
}

export const Cart: React.FC<Props> = ({ itemsCart, onCart, onCount }) => {
  const [selectedPhones, setSelectedPhones] = useState<PhoneData[]>([]);
  const [additionalPhones, setAdditionalPhones] = useState<PhoneData[]>([]);
  const [totalPhones, setTotalPhones] = useState<PhoneData[]>([]);

  const handleAddAdditionalPhones = (phone: PhoneData) => {
    setAdditionalPhones(() => [...additionalPhones, phone]);
  };

  const handleDeleteAdditionalPhones = (phone: PhoneData) => {
    let hasFirstItem = false;

    const filteredPhones = additionalPhones.filter(({ id }) => {
      if (id === phone.id && !hasFirstItem) {
        hasFirstItem = true;

        return false;
      }

      return true;
    });

    setAdditionalPhones(filteredPhones);
  };

  const handleDeleteAllAdditionalPhones = (phone: PhoneData) => {
    const filteredPhones = additionalPhones.filter(({ id }) => id !== phone.id);

    setAdditionalPhones(filteredPhones);
  };

  useEffect(() => {
    setTotalPhones(() => [...additionalPhones, ...selectedPhones]);
  }, [additionalPhones, selectedPhones]);

  useEffect(() => {
    onCount(additionalPhones.length);
  }, [additionalPhones]);

  const handleRemovePhone = (id: string) => {
    const filteredPhones = selectedPhones.filter((phone) => phone.id !== id);

    setSelectedPhones(filteredPhones);
  };

  const loadPhones = async () => {
    itemsCart.forEach(async (itemId) => {
      const phoneFromServer = await getPhoneById(itemId);

      setSelectedPhones((phone) => [...phone, phoneFromServer]);
    });
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className="cart-Page">
      <a href="#/home" className="cart-Page__back">
        Back
      </a>

      <h1 className="cart-Page__title">Cart</h1>

      <div
        className="
          cart-Page__content
          grid
          grid--desktop
        "
      >
        <div
          className="
            cart-Page__listOfCards
            grid__item--desktop-1-16
          "
        >
          <>
            {selectedPhones.map((phone) => (
              <CardOfCart
                phone={phone}
                onRemove={handleRemovePhone}
                onAdd={handleAddAdditionalPhones}
                onDelete={handleDeleteAdditionalPhones}
                onDeleteAll={handleDeleteAllAdditionalPhones}
                onCart={onCart}
                key={phone.id}
              />
            ))}
          </>
        </div>

        <div
          className="
            cart-Page__cardOfTotalPrice
            grid__item--desktop-17-24
          "
        >
          <CardOfTotalPrice phones={totalPhones} />
        </div>
      </div>
    </div>
  );
};

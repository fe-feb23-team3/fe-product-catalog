import React, { useState, useEffect } from 'react';
import { getPhoneById } from '../../api/phones';
import { CardOfCart } from './CardOfCart';
import { CardOfTotalPrice } from './CardOfTotalPrice';
import { PhoneData } from '../../types/phoneData';
import './Cart.scss';

interface Props {
  itemsCart: string[];
}

export const Cart: React.FC<Props> = ({ itemsCart }) => {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const loadPhones = async () => {
    setIsloading(true);

    itemsCart.forEach(async (itemId) => {
      const phoneFromServer = await getPhoneById(itemId);

      setPhones((phone) => [...phone, phoneFromServer]);
    });

    setIsloading(false);
  };

  useEffect(() => {
    loadPhones();
  }, [isLoading]);

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
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {phones.map((phone) => (
                <CardOfCart phone={phone} key={phone.id} />
              ))}
            </>
          )}
        </div>

        <div
          className="
            cart-Page__cardOfTotalPrice
            grid__item--desktop-17-24
          "
        >
          <CardOfTotalPrice phones={phones} />
        </div>
      </div>
    </div>
  );
};

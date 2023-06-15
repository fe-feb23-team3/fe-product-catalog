import React, { useState, useEffect } from 'react';
import { getPhoneById } from '../../api/phones';
import { CardOfCart } from './CardOfCart';
import { CardOfTotalPrice } from './CardOfTotalPrice';
import { PhoneData } from '../../types/phoneData';
import './Cart.scss';
import { Loader } from '../Loader';
import { CartIsEmpty } from './CartIsEmpty/CartIsEmpty';
import { ModalOfCart } from './ModalOfCart/ModalOfCart';

interface Props {
  onCart: (productId: string) => void;
  onClear: () => void;
}

export const Cart: React.FC<Props> = ({ onCart, onClear }) => {
  const itemsCartLocalStorage = localStorage.getItem('itemsCart');
  const [selectedPhones, setSelectedPhones] = useState<PhoneData[]>([]);
  const [additionalPhones, setAdditionalPhones] = useState<PhoneData[]>([]);
  const [totalPhones, setTotalPhones] = useState<PhoneData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

  const handleRemovePhone = (id: string) => {
    const filteredPhones = selectedPhones.filter((phone) => phone.id !== id);

    setSelectedPhones(filteredPhones);
  };

  const loadPhones = async () => {
    if (itemsCartLocalStorage) {
      const itemsCart: string[] = JSON.parse(itemsCartLocalStorage);

      if (itemsCart.length) {
        setIsLoading(true);
      }

      itemsCart.forEach(async (itemId) => {
        const phoneFromServer = await getPhoneById(itemId);

        setIsLoading(false);
        setSelectedPhones((phone) => [...phone, phoneFromServer]);
      });
    }
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
            {isLoading && <Loader isLoading={isLoading} />}

            {!totalPhones.length && !isLoading && <CartIsEmpty />}

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
          <CardOfTotalPrice
            phones={selectedPhones}
            openModal={handleOpenModal}
          />
        </div>
      </div>

      {openModal && (
        <ModalOfCart closeModal={handleCloseModal} onClear={onClear} />
      )}
    </div>
  );
};

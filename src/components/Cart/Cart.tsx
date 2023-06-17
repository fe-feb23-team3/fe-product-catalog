import React, { useState, useEffect } from 'react';
import { getPhoneById } from '../../api/phones';
import { CardOfCart } from './CardOfCart';
import { CardOfTotalPrice } from './CardOfTotalPrice';
import { PhoneData } from '../../types/phoneData';
import './Cart.scss';
import { Loader } from '../Loader';
import { CartIsEmpty } from './CartIsEmpty/CartIsEmpty';
import { ModalOfCart } from './ModalOfCart/ModalOfCart';
import { BackLink } from '../BackLink';
import { PageTitle } from '../PageTitle';

interface Props {
  itemsCart: { id: string, count: number }[],
  onCart: (productId: string) => void;
  onClear: () => void;
  onCountChange: (id: string, plusOrMinus: boolean) => void;
}

export const Cart: React.FC<Props> = ({
  itemsCart,
  onCart,
  onClear,
  onCountChange,
}) => {
  const [products, setProducts] = useState<PhoneData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const loadPhones = async () => {
    if (itemsCart.length) {
      setIsLoading(true);
    }

    itemsCart.forEach(async (item) => {
      const productFromServer = await getPhoneById(item.id);

      setIsLoading(false);
      setProducts((currentProducts) => [...currentProducts, productFromServer]);
    });
  };

  useEffect(() => {
    loadPhones();
  }, []);

  useEffect(() => {
    const productsFiltered = products.filter(product => {
      return itemsCart.some((item) => item.id === product.id);
    });

    setProducts(productsFiltered);
  }, [itemsCart]);

  return (
    <div className="cart-Page">
      <BackLink />

      <div className="cart-Page__title">
        <PageTitle title="Cart" />
      </div>

      <div className="
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

            {!products.length && !isLoading && <CartIsEmpty />}

            {products.map((product) => (
              <CardOfCart
                itemsCart={itemsCart}
                product={product}
                onCart={onCart}
                onCountChange={onCountChange}
                key={product.id}
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
            itemsCart={itemsCart}
            products={products}
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

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PhoneData } from '../../types/phoneData';
import { ProductCard } from '../ProductCard';

import './Favourites.scss';
import home from '../images/home.svg';
import arrowRight from '../images/arrow_right.svg';
import { getPhoneById } from '../../api/phones';
import { Loader } from '../Loader';

interface Props {
  itemsCart: string[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const Favourites: React.FC<Props> = ({
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhones = async () => {
    if (itemsFavourites.length) {
      setIsLoading(true);
    }

    itemsFavourites.forEach(async (itemId) => {
      const phoneFromServer = await getPhoneById(itemId);

      setIsLoading(false);
      setPhones((phone) => [...phone, phoneFromServer]);
    });
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <section className="catalog">
      <div className="favourites__breadcrumbs">
        <NavLink to="/" className="catalog__breadcrumbs-link">
          <img src={home} alt="home" className="catalog__breadcrumbs-icon" />
        </NavLink>
        <img src={arrowRight} alt="home" />
        <span className="catalog__breadcrumbs-text">Favourites</span>
      </div>

      <h1 className="catalog__title">Favourites</h1>

      <div className="catalog__item-count">{`${phones.length} items`}</div>

      <Loader isLoading={isLoading} />

      <div className="catalog__phones grid--catalog grid">
        {!isLoading
          && phones.map((phone) => (
            <ProductCard
              phone={phone}
              key={phone.name}
              itemsCart={itemsCart}
              onCart={onCart}
              itemsFavourites={itemsFavourites}
              onFavourites={onFavourites}
            />
          ))}
      </div>

      <div className="favourites__marginBottom"></div>
    </section>
  );
};

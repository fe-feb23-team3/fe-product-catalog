import React, { useCallback, useEffect, useState } from 'react';
import { PhoneData } from '../../types/phoneData';
import { ProductCard } from '../../components/ProductCard';
import './Favourites.scss';
import { getPhoneById } from '../../api/phones';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs';

interface Props {
  itemsCart: {id: string, count: number}[];
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
  const breadcrumbsPath = [
    { text: 'Favourites', link: '' },
  ];

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

  const handleOnFavourites = useCallback((productId) => {
    const findPhoneById = phones.some((item) => item.id === productId);

    if (findPhoneById) {
      const filteredPhones = phones.filter((phone) => phone.id !== productId);

      setPhones(filteredPhones);
    }

    onFavourites(productId);
  },
  [phones]);

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <section className="catalog">
      <Breadcrumbs path={breadcrumbsPath} />

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
              onFavourites={handleOnFavourites}
            />
          ))}
      </div>

      <div className="favourites__marginBottom"></div>
    </section>
  );
};

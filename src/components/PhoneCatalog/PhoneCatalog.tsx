import React, { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { PhoneData } from '../../types/phoneData';
import { ProductCard } from '../ProductCard';

interface Props {
  itemsCart: string[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const PhoneCatalog: React.FC<Props> = ({
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const [phones, setPhones] = useState<PhoneData[]>([]);

  const loadPhones = async () => {
    const phonesFromServer = await getPhones();

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <>
      <h1>Phone catalog</h1>
      <div className="catalog">
        {phones.map((phone) => (
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
    </>
  );
};

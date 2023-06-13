import React, { useCallback, useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { PhoneData } from '../../types/phoneData';
import { ProductCard } from '../ProductCard';

/* eslint-disable no-console */

export const PhoneCatalog: React.FC = () => {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isChekedProductId, setIsChekedProductId] = useState<string[]>([]);

  const loadPhones = async () => {
    const phonesFromServer = await getPhones();

    setPhones(phonesFromServer);
  };

  const handleAddToCart = useCallback((productId) => {
    setIsChekedProductId((currentId) => [...currentId, productId]);
  }, []);

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
            isChekedProductId={isChekedProductId}
            onCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

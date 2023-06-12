import React, { useEffect } from 'react';
import { getPhones } from '../../api/phones';
import { PhoneData } from '../../types/phoneData';
import { ProductCard } from '../ProductCard';

/* eslint-disable no-console */

export const PhoneCatalog: React.FC = () => {
  const [phones, setPhones] = React.useState<PhoneData[]>([]);

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
          <ProductCard phone={phone} key={phone.name} />
        ))}
      </div>
    </>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { getFilteredPhones } from '../../api/phones';
import { Loader } from '../Loader';
import { ProductCard } from '../ProductCard';
import { PhoneData } from '../../types/phoneData';

import './RecomendModels.scss';
import { SectionTitle } from '../SectionTitle';

import arrowDarkLeft from '../images/arrow_dark_left.svg';
import arrowDarkRight from '../images/arrow_dark_right.svg';

interface Props {
  title: string;
  itemsCart: string[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const RecomendModels: React.FC<Props> = ({
  title,
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhonesByPage = async (page: string) => {
    setIsLoading(true);
    const info = await getFilteredPhones(`${page}`);
    const visiblePhonesFromServer = info.visiblePhones;

    setPhones(visiblePhonesFromServer);
    setIsLoading(false);
  };

  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - 400,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + 400,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    loadPhonesByPage(`page=${1}&sort=${'default'}&size=${8}`);
  }, []);

  return (
    <div className="recomend">
      <div className="recomend__title">
        <SectionTitle title={title} />

        <div className="recomend__title-buttons">
          <button
            type="button"
            onClick={scrollLeft}
            className="recomend__title-button"
          >
            <img src={arrowDarkLeft} alt="arrow-left" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            className="recomend__title-button"
          >
            <img src={arrowDarkRight} alt="arrow-right" />
          </button>
        </div>
      </div>

      <Loader isLoading={isLoading} />

      <div className="recomend-models" ref={scrollContainerRef}>
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
    </div>
  );
};

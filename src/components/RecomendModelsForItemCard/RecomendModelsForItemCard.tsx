/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../Loader';
import { ProductCard } from '../ProductCard';
import { PhoneData } from '../../types/phoneData';

import './RecomendModelsForItemCard.scss';
import { SectionTitle } from '../SectionTitle';

import arrowDarkLeft from '../images/arrow_dark_left.svg';
import arrowDarkRight from '../images/arrow_dark_right.svg';
import { getRecommendedPhones } from '../../api/phones';

interface Props {
  id: string;
  title: string;
  showDiscount?: boolean;
  itemsCart: {id: string, count: number}[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const RecomendModelsForItemCard: React.FC<Props> = ({
  id,
  title,
  showDiscount,
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [phones, setPhones] = useState<PhoneData[]>([]);

  const loadPhonesByPage = async () => {
    const loadPhones = await getRecommendedPhones(id);

    console.log('id', id);
    console.log('visiblePhonesFromServer', loadPhones);

    setPhones(loadPhones);
  };

  const isLoading = !phones;

  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - 430,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + 430,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    loadPhonesByPage();
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
              showDiscount={showDiscount}
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

RecomendModelsForItemCard.defaultProps = {
  showDiscount: false,
};

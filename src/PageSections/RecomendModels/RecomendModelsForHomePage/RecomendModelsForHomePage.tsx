import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../../../components/Loader';
import { ProductCard } from '../../../components/ProductCard';
import { PhoneData } from '../../../types/phoneData';

import './RecomendModelsForHomePage.scss';
import { SectionTitle } from '../../../components/SectionTitle';

import arrowDarkLeft from '../../../images/arrow_dark_left.svg';
import arrowDarkRight from '../../../images/arrow_dark_right.svg';

interface Props {
  title: string;
  getPhones: () => Promise<PhoneData[]>;
  showDiscount?: boolean;
  itemsCart: {id: string, count: number}[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const RecomendModels: React.FC<Props> = ({
  title,
  getPhones,
  showDiscount,
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhonesByPage = async () => {
    setIsLoading(true);
    const loadPhones = await getPhones();
    const visiblePhonesFromServer = loadPhones;

    setPhones(visiblePhonesFromServer);
    setIsLoading(false);
  };

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

RecomendModels.defaultProps = {
  showDiscount: false,
};

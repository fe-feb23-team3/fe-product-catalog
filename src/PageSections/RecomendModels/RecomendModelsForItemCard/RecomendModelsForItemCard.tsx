import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Loader } from '../../../components/Loader';
import { ProductCard } from '../../../components/ProductCard';
import { PhoneData } from '../../../types/phoneData';

import './RecomendModelsForItemCard.scss';
import { SectionTitle } from '../../../components/SectionTitle';
import { getRecommendedPhones } from '../../../api/phones';
import { MoveButton } from '../../../components/MoveButton';

interface Props {
  id: string;
  title: string;
  showDiscount?: boolean;
  itemsCart: { id: string, count: number }[];
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

    setPhones(loadPhones);
  };

  const isLoading = !phones;

  const scrollLeft = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - 430,
        behavior: 'smooth',
      });
    }
  }, []);

  const scrollRight = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + 430,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    loadPhonesByPage();
  }, []);

  return (
    <div className="recomend">
      <div className="recomend__title">
        <SectionTitle title={title} />

        <div className="recomend__title-buttons">
          <MoveButton
            onClick={scrollLeft}
            direction="left"
            isDisabled={false}
          />

          <MoveButton
            onClick={scrollRight}
            direction="right"
            isDisabled={false}
          />
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

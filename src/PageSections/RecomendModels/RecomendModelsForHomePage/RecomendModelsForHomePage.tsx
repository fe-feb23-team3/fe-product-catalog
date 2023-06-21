import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Loader } from '../../../components/Loader';
import { ProductCard } from '../../../components/ProductCard';
import { PhoneData } from '../../../types/phoneData';

import './RecomendModelsForHomePage.scss';
import { SectionTitle } from '../../../components/SectionTitle';
import { MoveButton } from '../../../components/MoveButton';

interface Props {
  title: string;
  getPhones: () => Promise<PhoneData[]>;
  showDiscount?: boolean;
  itemsCart: { id: string, count: number }[];
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
          <div className=".swiper-button-prev">
            <MoveButton
              onClick={scrollLeft}
              direction="left"
              isDisabled={false}
            />
          </div>
          <div className=".swiper-button-next">
            <MoveButton
              onClick={scrollRight}
              direction="right"
              isDisabled={false}
            />
          </div>
        </div>
      </div>

      <Loader isLoading={isLoading} />

      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        // spaceBetween={16}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          1199: {
            slidesPerView: 4,
            initialSlide: 0,
          },
          1050: {
            slidesPerView: 4,
          },
          778: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          422: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="recomend-models" ref={scrollContainerRef}>
          {!isLoading && phones.map((phone) => (
            <SwiperSlide key={phone.name}>
              <ProductCard
                showDiscount={showDiscount}
                phone={phone}
                key={phone.name}
                itemsCart={itemsCart}
                onCart={onCart}
                itemsFavourites={itemsFavourites}
                onFavourites={onFavourites}
              />
            </SwiperSlide>
          ))}
        </div>

      </Swiper>
    </div>
  );
};

RecomendModels.defaultProps = {
  showDiscount: false,
};

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Loader } from '../../../components/Loader';
import { ProductCard } from '../../../components/ProductCard';
import { PhoneData } from '../../../types/phoneData';

import './RecommendModels.scss';
import { SectionTitle } from '../../../components/SectionTitle';
import { MoveButton } from '../../../components/MoveButton';

interface Props {
  title: string;
  phones: PhoneData[];
  showDiscount?: boolean;
  itemsCart: { id: string, count: number }[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const RecommendModels: React.FC<Props> = ({
  title,
  phones,
  showDiscount,
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(phones.length === 0);
  }, [phones]);

  return (
    <div className="recomend">
      <div className="recomend__title">
        <SectionTitle title={title} />

        <div className="recomend__title-buttons">
          <div className="swiper-button-left">
            <MoveButton
              direction="left"
              isDisabled={false}
            />
          </div>
          <div className="swiper-button-right">
            <MoveButton
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
        spaceBetween={16}
        loop
        navigation={{
          nextEl: '.swiper-button-right',
          prevEl: '.swiper-button-left',
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
        <div className="product-slider__content">
          {!isLoading && phones.map((phone) => (
            <SwiperSlide key={phone.name} className="product-slider__content__card">
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

RecommendModels.defaultProps = {
  showDiscount: false,
};

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import './slider.scss';

import banner1 from '../../img/banner/banner-phones.png';
import banner2 from '../../img/banner/banner-tablets.png';
import banner3 from '../../img/banner/banner-accessories.png';

export const Slider: React.FC = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        pagination={{
          el: '.swiper-custom-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={banner1} alt="apple-phones" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="apple-tablets" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="apple-accessories" />
        </SwiperSlide>
      </Swiper>

      <div className="arrow-left">
        <MdOutlineKeyboardArrowLeft />
      </div>

      <div className="arrow-right">
        <MdOutlineKeyboardArrowRight />
      </div>

      <div className="swiper-custom-pagination"></div>
    </div>
  );
};

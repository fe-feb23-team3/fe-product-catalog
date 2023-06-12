import React from 'react';
import { PhoneData } from '../../types/phoneData';
/* eslint-disable no-console */

interface Props {
  phone: PhoneData;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    name,
    screen,
    capacity,
    ram,
    fullPrice,
    price,
    image,
  } = phone;

  // const pathConverter = (path: string) => {
  //   return '../../' + path;
  // };

  return (
    <div className="card">
      {console.log(image)}
      <img
        src={image}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        className="card__photo"
      />

      <h2 className="card__title">
        {name}
        (MQ023)
      </h2>

      <div className="card__price">
        <span className="card__price-current">{`$${price}`}</span>
        <span className="card__price-full">{`$${fullPrice}`}</span>
      </div>

      <div className="card__divider"></div>

      <div className="card__specs">
        <div className="card__spec">
          <p className="card__spec-title">Screen</p>
          <p className="card__spec-value">{screen}</p>
        </div>
        <div className="card__spec">
          <p className="card__spec-title">Capacity</p>
          <p className="card__spec-value">{capacity}</p>
        </div>
        <div className="card__spec">
          <p className="card__spec-title">RAM</p>
          <p className="card__spec-value">{ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <a href="/" className="card__buttons-addToCart">
          Add to cart
        </a>
        <div className="card__buttons-AddToFavourites"></div>
      </div>
    </div>
  );
};

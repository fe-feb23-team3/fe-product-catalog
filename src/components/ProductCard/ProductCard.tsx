import React from 'react';
import { NavLink } from 'react-router-dom';
import { PhoneData } from '../../types/phoneData';
import './ProductCard.scss';
import { ButtonAddToCart } from '../ButtonAddToCart';
import { ButtonFavourites } from '../ButtonFavourites';

interface Props {
  showDiscount?: boolean;
  phone: PhoneData;
  itemsCart: {id: string, count: number}[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const ProductCard: React.FC<Props> = ({
  showDiscount,
  phone,
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const {
    name, screen, capacity, ram, fullPrice, price, itemId,
  } = phone;

  return (
    <NavLink to={`/phoneCardData/${itemId}`} className="item__card__link card">
      <div className="card__container">
        <div className="card__top-wrapper">
          <div className="image__wrapper">
            <img
              src={`https://be-product-catalog.onrender.com/products/phones/${itemId}/image`}
              alt={name}
              className="card__photo"
            />
          </div>

          <h2 className="card__title">{name}</h2>
        </div>

        <div className="card__bottom-wrapper">
          <div className="card__price">
            <span className="card__price-current">{`$${price}`}</span>
            {!showDiscount && (
              <span className="card__price-full">{`$${fullPrice}`}</span>
            )}
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

            <div className="card__buttons">
              <div className="card__buttons-cart">
                <ButtonAddToCart items={itemsCart} itemId={itemId} onClick={onCart} />
              </div>

              <div className="card__buttons-favourites">
                <ButtonFavourites items={itemsFavourites} itemId={itemId} onClick={onFavourites} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>

  );
};

ProductCard.defaultProps = {
  showDiscount: false,
};

import React from 'react';
import classNames from 'classnames';
import { PhoneData } from '../../types/phoneData';

interface Props {
  phone: PhoneData;
  itemsCart: string[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const ProductCard: React.FC<Props> = ({
  phone,
  itemsCart,
  itemsFavourites,
  onCart: handleAddToCart,
  onFavourites: handleAddToFavourites,
}) => {
  const {
    id, name, screen, capacity, ram, fullPrice, price,
  } = phone;

  return (
    <div className="card">
      <img
        src={`https://be-product-catalog.onrender.com/phones/${id}/image`}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        className="card__photo"
      />

      <h2 className="card__title">
        {name}
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
        <button
          type="button"
          onClick={() => handleAddToCart(id)}
          className={classNames('card__buttons-addToCart', {
            'card__buttons-addToCart-checked': itemsCart.includes(id),
          })}
        >
          {itemsCart.includes(id) ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          type="button"
          onClick={() => handleAddToFavourites(id)}
          className={classNames('card__buttons-AddToFavourites', {
            'card__buttons-AddToFavourites-default': !itemsFavourites.includes(id),
            'card__buttons-AddToFavourites-checked': itemsFavourites.includes(id),
          })}
        >
        </button>
      </div>
    </div>
  );
};

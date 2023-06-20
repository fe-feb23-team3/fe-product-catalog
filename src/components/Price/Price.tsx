import React from 'react';
import './Price.scss';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
}

export const Price: React.FC<Props> = ({ data }) => {
  const { priceDiscount, priceRegular } = data;

  return (
    <div className="price">
      <span className="price__new">{`$${priceDiscount}`}</span>
      <span className="price__old">{`$${priceRegular}`}</span>
    </div>
  );
};

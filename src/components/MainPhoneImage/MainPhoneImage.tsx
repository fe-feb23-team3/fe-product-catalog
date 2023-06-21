import React from 'react';
import './MainPhoneImage.scss';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
  mainImage: number;
}

export const MainPhoneImage: React.FC<Props> = ({ data, mainImage }) => {
  const { id } = data;

  return (
    <div className="phone__image">
      <img
        src={`https://be-product-catalog.onrender.com/phoneCardData/${id}/images/${mainImage}`}
        alt="phone main"
        className="phone__image--main"
      />
    </div>
  );
};

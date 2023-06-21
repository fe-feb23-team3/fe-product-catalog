/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import './SecondaryPhoneImage.scss';
import { v4 as uuid4 } from 'uuid';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
  mainImage: number;
  onImageSelect: (imageIndex: number) => void;
}

export const SecondaryPhoneImage: React.FC<Props> = ({ data, mainImage, onImageSelect }) => {
  const {
    images,
    id,
  } = data;

  return (
    <div className="phone__image-wrapper">
      {images.map(image => (
        <div
          key={uuid4()}
          className="phone__image-container"
          onClick={() => onImageSelect(images.indexOf(image))}
        >
          <img
            src={`https://be-product-catalog.onrender.com/phoneCardData/${id}/images/${images.indexOf(image)}`}
            alt=""
            className={
              classNames('phone__image--small', {
                'phone__image--small--active': images.indexOf(image) === mainImage,
              })
            }
          />
        </div>
      ))}
    </div>
  );
};

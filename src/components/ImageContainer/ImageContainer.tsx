import React from 'react';
import './ImageContainer.scss';
import { RandomImage } from '../RandomImage';
import image1 from '../../images/NoGoodsYet/10703776.png';
import image2 from '../../images/NoGoodsYet/10703780.png';
import image3 from '../../images/NoGoodsYet/10703784.png';
import image4 from '../../images/NoGoodsYet/10703788.png';
import image5 from '../../images/NoGoodsYet/10703792.png';
import image6 from '../../images/NoGoodsYet/10703796.png';
import image7 from '../../images/NoGoodsYet/10703800.png';
import image8 from '../../images/NoGoodsYet/10703806.png';
import image9 from '../../images/NoGoodsYet/10703809.png';
import image10 from '../../images/NoGoodsYet/10703812.png';
import image11 from '../../images/NoGoodsYet/10703814.png';
import image12 from '../../images/NoGoodsYet/10703820.png';
import image13 from '../../images/NoGoodsYet/10703823.png';
import image14 from '../../images/NoGoodsYet/10703826.png';
import image15 from '../../images/NoGoodsYet/10703829.png';
import image16 from '../../images/NoGoodsYet/10703833.png';
import image17 from '../../images/NoGoodsYet/10703835.png';
import image18 from '../../images/NoGoodsYet/10703837.png';

export const ImageContainer: React.FC = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  return (
    <div className="image__container">
      <RandomImage images={images} />

      <p className="text">
        Look into the future - soon new products in our assortment!
      </p>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import './ImageContainer.scss';

export const ImageContainer: React.FC = () => {
  const [index, setIndex] = useState<number>();

  useEffect(() => {
    setIndex(() => Math.floor(Math.random() * 20));
  }, []);

  return (
    <div className="image__container">
      <img src={`https://be-product-catalog.onrender.com/noGoods/${index}/image`} alt="Phone cartoon" />

      <p className="text">
        Look into the future - soon new products in our assortment!
      </p>
    </div>
  );
};

import React from 'react';
import './Characteristics.scss';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
}

export const Characteristics: React.FC<Props> = ({ data }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
  } = data;

  return (
    <div className="characteristics">
      <div className="characteristics__title">
        <p className="characteristics__item">Screen</p>
        <p className="characteristics__item">Resolution</p>
        <p className="characteristics__item">Processor</p>
        <p className="characteristics__item">RAM</p>
      </div>

      <div className="characteristics__description">
        <p className="characteristics__item">{screen}</p>
        <p className="characteristics__item">{resolution}</p>
        <p className="characteristics__item">{processor}</p>
        <p className="characteristics__item">{ram}</p>
      </div>
    </div>
  );
};

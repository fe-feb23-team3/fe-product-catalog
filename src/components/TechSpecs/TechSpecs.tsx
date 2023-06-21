import React from 'react';
import './TechSpecs.scss';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
}

export const TechSpecs: React.FC<Props> = ({ data }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = data;

  return (
    <div className="tech-specs">
      <h2 className="tech-specs__title">Tech specs</h2>
      <div className="tech-specs__container">
        <div className="tech-specs__name">
          <p className="tech-specs__item">Screen</p>
          <p className="tech-specs__item">Resolution</p>
          <p className="tech-specs__item">Processor</p>
          <p className="tech-specs__item">RAM</p>
          <p className="tech-specs__item">Built in memory</p>
          <p className="tech-specs__item">Camera</p>
          <p className="tech-specs__item">Zoom</p>
          <p className="tech-specs__item">Cell</p>
        </div>

        <div className="tech-specs__description">
          <p className="tech-specs__item">{screen}</p>
          <p className="tech-specs__item">{resolution}</p>
          <p className="tech-specs__item">{processor}</p>
          <p className="tech-specs__item">{ram}</p>
          <p className="tech-specs__item">{capacity}</p>
          <p className="tech-specs__item">{camera}</p>
          <p className="tech-specs__item">{zoom}</p>
          <p className="tech-specs__item">{cell.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

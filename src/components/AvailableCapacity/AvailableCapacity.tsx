/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import './AvailableCapacity.scss';
import { Link } from 'react-router-dom';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  product: ItemCardData;
  onSelectOption: (
    chosenCapacity: string,
    chosenColor: string,
  ) => void;
}

export const AvailableCapacity: React.FC<Props> = ({
  product,
  onSelectOption,
}) => {
  const {
    capacityAvailable,
    namespaceId,
    color,
  } = product;

  return (
    <div className="capacity">
      <p>Select capacity</p>
      <div className="capacity__container">
        {capacityAvailable.map((capacity) => (
          <Link
            to={`/phoneCardData/${namespaceId}-${capacity.toLowerCase()}-${color}`}
            key={capacity}
            className="capacity__link"
          >
            <div
              className={
                classNames('capacity__button', {
                  'capacity__button--active': capacity === product.capacity,
                })
              }
              onClick={() => onSelectOption(capacity, color)}
            >
              {capacity}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

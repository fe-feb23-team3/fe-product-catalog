/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import './AvailableCapacity.scss';
import { Link } from 'react-router-dom';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
  onSelectOption: (
    chosenCapacity: string,
    chosenColor: string,
  ) => void;
}

export const AvailableCapacity: React.FC<Props> = ({
  data,
  onSelectOption,
}) => {
  const {
    capacityAvailable,
    namespaceId,
    id,
    color,
  } = data;

  return (
    <div className="capacity">
      <p>Select capacity</p>
      <div className="capacity__container">
        {capacityAvailable.map((capacity) => (
          <Link
            to={`/phoneCardData/${namespaceId}-${capacity.toLowerCase()}-${color}`}
            key={id}
            className="capacity__link"
          >
            <div
              className={
                classNames('capacity__button', {
                  'capacity__button--active': capacity === data.capacity,
                })
              }
              onClick={() => onSelectOption(capacity, '')}
            >
              {capacity}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

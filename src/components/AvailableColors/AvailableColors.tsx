/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import './AvailableColors.scss';
import { Link } from 'react-router-dom';
import { PhoneColors } from '../../types/PhoneColors';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
  onSelectOption: (
    chosenCapacity: string,
    chosenColor: string,
  ) => void;
}

export const AvailableColors: React.FC<Props> = ({ data, onSelectOption }) => {
  const {
    namespaceId,
    colorsAvailable,
    capacity,
  } = data;

  return (
    <div className="colors">
      <div className="colors__title">
        <p>Available colors</p>
        <p>{`ID: ${namespaceId}`}</p>
      </div>

      <div className="colors__circle-container">
        {colorsAvailable.map(color => (
          <Link
            to={`/phoneCardData/${namespaceId}-${capacity.toLowerCase()}-${color}`}
            key={color}
          >
            <div className="colors__circle">
              <div
                className={
                  classNames('colors__circle-item', {
                    'colors__circle-item--active': color === data.color,
                  })
                }
                style={{
                  backgroundColor: PhoneColors[color as keyof typeof PhoneColors],
                }}
                onClick={() => onSelectOption('', color)}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

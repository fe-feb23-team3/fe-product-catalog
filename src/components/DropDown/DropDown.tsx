/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import './DropDown.scss';
import classNames from 'classnames';
import arrowUp from '../../images/arrow_up.svg';
import arrowDown from '../../images/arrow_down.svg';

interface Props {
  currentItem: string;
  items: { id: number, value: string; title: string }[];
  onSelect: (sort: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  currentItem,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const title = items.find((item) => item.value === currentItem)?.title || 'Choose sort';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSeclect = (sort: string) => () => {
    onSelect(sort);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [currentItem]);

  return (
    <div className={classNames('dropdown', { 'dropdown--open': isOpen })}>
      <div
        className="dropdown__toggle"
        onClick={toggleDropdown}
      >
        <div className="dropdown__toggle-text">{title}</div>
        <div className="dropdown__toggle-icon">
          {isOpen ? (
            <img src={arrowUp} alt="arrow-left" className="back-link__icon" />
          ) : (
            <img src={arrowDown} alt="arrow-left" className="back-link__icon" />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown__menu">
          {items.map((item) => (
            <li
              key={item.id}
              className="dropdown__item"
              onClick={handleSeclect(item.value)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

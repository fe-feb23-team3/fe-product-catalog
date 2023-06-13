import React from 'react';
import arrowDarkLeft from '../images/arrow_dark_left.svg';
import arrowDarkRight from '../images/arrow_dark_right.svg';

interface Props {
  isDisabled: boolean;
  onClick: () => void;
  direction: 'left' | 'right';
}

export const MoveButton: React.FC<Props> = ({
  isDisabled,
  onClick,
  direction,
}) => {
  return (
    <button
      className="pagination__button"
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <img src={arrowDarkLeft} alt="arrow-left" />
      ) : (
        <img src={arrowDarkRight} alt="arrow-right" />
      )}
    </button>
  );
};

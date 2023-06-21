import React from 'react';
import classNames from 'classnames';
import arrowDarkLeft from '../../images/arrow_dark_left.svg';
import arrowDarkRight from '../../images/arrow_dark_right.svg';
import arrowLeft from '../../images/arrow_left.svg';
import arrowRight from '../../images/arrow_right.svg';

interface Props {
  isDisabled: boolean;
  onClick?: () => void;
  direction: 'left' | 'right';
}

export const MoveButton: React.FC<Props> = ({
  isDisabled,
  onClick,
  direction,
}) => {
  return (
    <button
      className={classNames(
        'pagination__button',
        { 'pagination__button--disabled': isDisabled },
        { 'pagination__button--default': !isDisabled },
      )}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {isDisabled ? (
        <img src={direction === 'left' ? arrowLeft : arrowRight} alt="" />
      ) : (
        <img src={direction === 'left' ? arrowDarkLeft : arrowDarkRight} alt="" />
      )}
    </button>
  );
};

MoveButton.defaultProps = {
  onClick: () => {},
};

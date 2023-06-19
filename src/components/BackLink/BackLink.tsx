import React from 'react';
import './BackLink.scss';
import arrowDarkLeft from '../../images/arrow_dark_left.svg';

export const BackLink: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div
      onClick={goBack}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          goBack();
        }
      }}
      role="button"
      tabIndex={0}
      className="back-link"
    >
      <img src={arrowDarkLeft} alt="arrow-left" className="back-link__icon" />
      <span className="back-link__text">Back</span>
    </div>
  );
};

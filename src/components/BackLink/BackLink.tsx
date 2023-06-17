import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackLink.scss';
import arrowDarkLeft from '../images/arrow_dark_left.svg';

export const BackLink: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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

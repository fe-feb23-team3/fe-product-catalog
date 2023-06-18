import React from 'react';
import arrowRight from '../../../images/arrow_grey_right.svg';
import './BreadcrumbsItem.scss';

interface Props {
  text: string;
}

export const BreadcrumbsItem: React.FC<Props> = ({ text }) => {
  return (
    <div className="breadcrumbsItem">
      <img
        className="breadcrumbsItem-icon"
        src={arrowRight}
        alt="arrowRight"
      />
      <span className="breadcrumbsItem-link">{text}</span>
    </div>
  );
};

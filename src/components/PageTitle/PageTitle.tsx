import React from 'react';

import './PageTitle.scss';

interface Props {
  title: string;
}

export const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="page-title">{title}</h1>
  );
};

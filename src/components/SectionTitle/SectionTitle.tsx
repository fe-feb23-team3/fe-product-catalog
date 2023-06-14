import React from 'react';

import './SectionTitle.scss';

interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="section-title">{title}</h1>
  );
};

import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import './AccessoriesCatalog.scss';
import { ImageContainer } from '../../components/ImageContainer';

export const Accessories: React.FC = () => {
  const breadcrumbsPath = [
    { text: 'Acccessories', link: '' },
  ];

  return (
    <div>
      <Breadcrumbs path={breadcrumbsPath} />

      <div className="catalog__title">
        <PageTitle title="Acccessories" />
      </div>

      <ImageContainer />
    </div>
  );
};

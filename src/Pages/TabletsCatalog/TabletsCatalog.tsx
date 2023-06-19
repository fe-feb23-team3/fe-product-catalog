import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import { ImageContainer } from '../../components/ImageContainer';

export const TabletsCatalog: React.FC = () => {
  const breadcrumbsPath = [
    { text: 'Tablets', link: '' },
  ];

  return (
    <div>
      <Breadcrumbs path={breadcrumbsPath} />

      <div className="catalog__title">
        <PageTitle title="Tablets" />
      </div>

      <ImageContainer />
    </div>
  );
};

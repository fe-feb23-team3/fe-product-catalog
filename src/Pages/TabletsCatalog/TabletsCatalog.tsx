import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import { Loader } from '../../components/Loader';

export const TabletsCatalog: React.FC = () => {
  const breadcrumbsPath = [
    { text: 'Tablets', link: '' },
  ];

  return (
    <div>
      <Breadcrumbs path={breadcrumbsPath} />

      <div className="catalog__title">
        <PageTitle title="Acccessories" />
      </div>

      <Loader isLoading={!false} />
    </div>
  );
};

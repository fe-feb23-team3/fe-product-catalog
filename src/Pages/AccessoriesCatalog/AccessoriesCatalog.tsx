import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import './AccessoriesCatalog.scss';
import { Loader } from '../../components/Loader';

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

      <Loader isLoading={!false} />
    </div>
  );
};

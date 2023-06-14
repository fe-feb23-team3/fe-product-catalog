import React from 'react';
import { PageTitle } from '../PageTitle';
import { ShopByCategory } from '../ShopByCategory';

import './HomePage.scss';

export const HomePage: React.FC = () => {
  const homePageTitle = 'Welcome to Nice Gadgets store!';

  return (
    <div className="home-page">
      <div className="home-page-title__wraper">
        <PageTitle title={homePageTitle} />
      </div>

      <ShopByCategory
        totalOfPhones={72}
        totalOfTablets={100500}
        totalOfAccessories={500100}
      />
    </div>
  );
};

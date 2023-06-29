import React from 'react';
import { ShopByCategory } from '../../PageSections/ShopByCategory';
import { PageTitle } from '../PageTitle';

export const HomePage: React.FC = () => {
  const homePageTitle = 'Welcome to Nice Gadgets store!';

  return (
    <div className="home-page">
      <PageTitle title={homePageTitle} />

      <ShopByCategory
        totalOfPhones={72}
        totalOfTablets={100500}
        totalOfAccessories={500100}
      />
    </div>
  );
};

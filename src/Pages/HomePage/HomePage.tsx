import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { ShopByCategory } from '../../PageSections/ShopByCategory';
import { getNewestPhones, getByDiscountPhones } from '../../api/phones';

import './HomePage.scss';
import { RecomendModels } from '../../PageSections/RecomendModels/RecomendModelsForHomePage';
import { Slider } from '../../PageSections/Slider';

interface Props {
  itemsCart: {id: string, count: number}[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
  phonesCount: number;
}

export const HomePage: React.FC<Props> = ({
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
  phonesCount,
}) => {
  const homePageTitle = 'Welcome to Nice Gadgets store!';

  return (
    <div className="home-page">
      <div className="home-page__title">
        <PageTitle title={homePageTitle} />
      </div>

      <Slider />

      <RecomendModels
        title="Brand new models"
        getPhones={getNewestPhones}
        showDiscount={!false}
        onCart={onCart}
        onFavourites={onFavourites}
        itemsCart={itemsCart}
        itemsFavourites={itemsFavourites}
      />

      <ShopByCategory
        totalOfPhones={phonesCount}
        totalOfTablets={24}
        totalOfAccessories={100}
      />

      <RecomendModels
        title="Hot prices"
        getPhones={getByDiscountPhones}
        onCart={onCart}
        onFavourites={onFavourites}
        itemsCart={itemsCart}
        itemsFavourites={itemsFavourites}
      />
    </div>
  );
};

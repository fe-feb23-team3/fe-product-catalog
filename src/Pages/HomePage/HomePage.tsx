import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { ShopByCategory } from '../../components/ShopByCategory';
import { getNewestPhones, getByDiscount } from '../../api/phones';

import './HomePage.scss';
import { RecomendModels } from '../../components/RecomendModels';
import { Slider } from '../../components/Slider';

interface Props {
  itemsCart: string[];
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
      <PageTitle title={homePageTitle} />

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
        title="Hoot prices"
        getPhones={getByDiscount}
        onCart={onCart}
        onFavourites={onFavourites}
        itemsCart={itemsCart}
        itemsFavourites={itemsFavourites}
      />
    </div>
  );
};

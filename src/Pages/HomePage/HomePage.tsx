import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { ShopByCategory } from '../../components/ShopByCategory';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getNewestPhones, getByDiscountPhones } from '../../api/phones';

import './HomePage.scss';
import { RecomendModels } from '../../components/RecomendModels';

interface Props {
  itemsCart: string[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const HomePage: React.FC<Props> = ({
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
}) => {
  const homePageTitle = 'Welcome to Nice Gadgets store!';

  return (
    <div className="home-page">
      <PageTitle title={homePageTitle} />

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
        totalOfPhones={72}
        totalOfTablets={100500}
        totalOfAccessories={500100}
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

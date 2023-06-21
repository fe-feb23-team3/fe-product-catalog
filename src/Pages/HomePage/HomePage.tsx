import React, { useEffect } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { ShopByCategory } from '../../PageSections/ShopByCategory';
import { getNewestPhones, getByDiscountPhones } from '../../api/phones';

import './HomePage.scss';
import { RecommendModels } from '../../PageSections/RecomendModels/RecomendModelsForHomePage';
import { Slider } from '../../PageSections/Slider';
import { PhoneData } from '../../types/phoneData';

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
  const [newPhones, setNewPhones] = React.useState<PhoneData[]>([]);
  const [discountPhones, setDiscountPhones] = React.useState<PhoneData[]>([]);

  const loadNewPhones = async () => {
    const loadPhones = await getNewestPhones();
    const visiblePhonesFromServer = loadPhones;

    setNewPhones(visiblePhonesFromServer);
  };

  const loadDiscountPhones = async () => {
    const loadPhones = await getByDiscountPhones();
    const visiblePhonesFromServer = loadPhones;

    setDiscountPhones(visiblePhonesFromServer);
  };

  useEffect(() => {
    loadNewPhones();
    loadDiscountPhones();
  }, []);

  return (
    <div className="home-page">
      <div className="home-page__title">
        <PageTitle title={homePageTitle} />
      </div>

      <Slider />

      <RecommendModels
        title="Brand new models"
        phones={newPhones}
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

      <RecommendModels
        title="Hot prices"
        phones={discountPhones}
        onCart={onCart}
        onFavourites={onFavourites}
        itemsCart={itemsCart}
        itemsFavourites={itemsFavourites}
      />
    </div>
  );
};

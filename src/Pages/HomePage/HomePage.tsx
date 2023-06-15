import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
import { PageTitle } from '../../components/PageTitle';
import { ShopByCategory } from '../../components/ShopByCategory';
import 'react-alice-carousel/lib/alice-carousel.css';

// import image1 from './images/image1.jpeg';
// import image4 from './images/image4.jpeg';
// import image5 from './images/image5.jpeg';

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
        title="Hoot prices"
        onCart={onCart}
        onFavourites={onFavourites}
        itemsCart={itemsCart}
        itemsFavourites={itemsFavourites}
      />

      {/* <AliceCarousel autoPlay autoPlayInterval={3000}>
        <img src={image1} alt="image1" className="sliderimg" />
        <img src={image4} alt="image1" className="sliderimg" />
        <img src={image5} alt="image1" className="sliderimg" />
      </AliceCarousel> */}
    </div>
  );
};

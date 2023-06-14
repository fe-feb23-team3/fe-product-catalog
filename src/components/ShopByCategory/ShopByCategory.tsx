import React from 'react';
import phones from '../images/phones.png';
import tablets from '../images/tablets.png';
import accessories from '../images/accessories.png';
import './ShopByCategory.scss';
import { SectionTitle } from '../SectionTitle';

interface Props {
  totalOfPhones: number;
  totalOfTablets: number;
  totalOfAccessories: number;
}

export const ShopByCategory: React.FC<Props> = ({
  totalOfPhones, totalOfTablets, totalOfAccessories,
}) => {
  const shopByCategoryTitle = 'Shop by category';

  return (
    <section className="shop-by-category">
      <div className="shop-by-category__title-wrapper">
        <SectionTitle title={shopByCategoryTitle} />
      </div>

      <div className="shop-by-category__wrapper grid">
        <div className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-1-4
        grid__item--desktop-1-8
        "
        >
          <img
            src={phones}
            alt="Phones"
            className="shop-by-category__photo"
          />
          <div className="shop-by-category__card-title">Mobile phones</div>
          <div className="shop-by-category__total">{`${totalOfPhones} models`}</div>
        </div>

        <div className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-5-8
        grid__item--desktop-9-16
        "
        >
          <img
            src={tablets}
            alt="Tablets"
            className="shop-by-category__photo"
          />
          <div className="shop-by-category__card-title">Tablets</div>
          <div className="shop-by-category__total">{`${totalOfTablets} models`}</div>
        </div>

        <div className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-9-12
        grid__item--desktop-17-24
        "
        >
          <img
            src={accessories}
            alt="Laptops"
            className="shop-by-category__photo"
          />
          <div className="shop-by-category__card-title">Accessories</div>
          <div className="shop-by-category__total">{`${totalOfAccessories} models`}</div>
        </div>
      </div>
    </section>
  );
};

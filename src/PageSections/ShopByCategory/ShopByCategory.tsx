import React from 'react';
import { NavLink } from 'react-router-dom';
import { SectionTitle } from '../../components/SectionTitle';

import phones from '../../images/phones.png';
import tablets from '../../images/tablets.png';
import accessories from '../../images/accessories.png';
import './ShopByCategory.scss';

interface Props {
  totalOfPhones: number;
  totalOfTablets: number;
  totalOfAccessories: number;
}

export const ShopByCategory: React.FC<Props> = ({
  totalOfPhones,
  totalOfTablets,
  totalOfAccessories,
}) => {
  const shopByCategoryTitle = 'Shop by category';

  return (
    <section className="shop-by-category">
      <SectionTitle title={shopByCategoryTitle} />

      <div className="shop-by-category__wrapper grid">
        <NavLink
          to="/phones"
          className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-1-4
        grid__item--desktop-1-8
        "
        >
          <div className="shop-by-category__photo-wrapper">
            <img
              src={phones}
              alt="Phones"
              className="shop-by-category__photo"
            />
          </div>
          <div className="shop-by-category__card-title">Mobile phones</div>
          <div className="shop-by-category__total">{`${totalOfPhones} models`}</div>
        </NavLink>

        <NavLink
          to="/tablets"
          className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-5-8
        grid__item--desktop-9-16
        "
        >
          <div className="shop-by-category__photo-wrapper">
            <img
              src={tablets}
              alt="Tablets"
              className="shop-by-category__photo"
            />
          </div>
          <div className="shop-by-category__card-title">Tablets</div>
          <div className="shop-by-category__total">{`${totalOfTablets} models`}</div>
        </NavLink>

        <NavLink
          to="/accessories"
          className="
        shop-by-category__item
        grid__item--phone-1-4
        grid__item--tablet-9-12
        grid__item--desktop-17-24
        "
        >
          <div className="shop-by-category__photo-wrapper">
            <img
              src={accessories}
              alt="Laptops"
              className="shop-by-category__photo"
            />
          </div>
          <div className="shop-by-category__card-title">Accessories</div>
          <div className="shop-by-category__total">{`${totalOfAccessories} models`}</div>
        </NavLink>
      </div>
    </section>
  );
};

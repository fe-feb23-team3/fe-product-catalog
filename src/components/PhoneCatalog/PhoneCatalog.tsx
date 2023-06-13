import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getFilteredPhones } from '../../api/phones';
import { PhoneData } from '../../types/phoneData';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';
import './PhoneCatalog.scss';
import home from '../images/home.svg';
import arrowRight from '../images/arrow_right.svg';

export const PhoneCatalog: React.FC = () => {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [isChekedProductId, setIsChekedProductId] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhones, setTotalPhones] = useState(8);
  const [sortBy, setSortBy] = useState('default');
  const [totalPages, setTotalPages] = useState(4);

  const loadPhonesByPage = async (page: string) => {
    const phonesFromServer = await getFilteredPhones(`${page}`);

    setPhones(phonesFromServer);
  };

  const handleAddToCart = useCallback((productId) => {
    setIsChekedProductId((currentId) => [...currentId, productId]);
  }, []);

  useEffect(() => {
    loadPhonesByPage(`page=${currentPage}&sort=${sortBy}&size=${totalPhones}`);
    setTotalPages(Math.ceil(72 / totalPhones));
  }, [totalPhones, sortBy, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeTotalPages = (total: number) => {
    setTotalPhones(total);
  };

  const handleSortBy = (sort: string) => {
    setSortBy(sort);
  };

  return (
    <section className="catalog">
      <div className="catalog__breadcrumbs">
        <NavLink to="/" className="catalog__breadcrumbs-link">
          <img src={home} alt="home" className="catalog__breadcrumbs-icon" />
        </NavLink>
        <img src={arrowRight} alt="home" />
        <span className="catalog__breadcrumbs-text">Phones</span>
      </div>

      <h1 className="catalog__title">Mobile phones</h1>

      <div className="catalog__item-count">{`${phones.length} models`}</div>

      <div className="catalog__sorting grid">
        <div
          className="
          catalog__filter
          grid__item
          grid__item--phone-1-2
          grid__item--tablet-1-4
          grid__item--desktop-1-4
        "
        >
          <p className="catalog__filter-title">Sort by</p>
          <select
            className="catalog__filter-sort-by"
            defaultValue="default"
            onChange={(e) => handleSortBy(e.target.value)}
          >
            <option value="default" disabled>
              select
            </option>
            <option value="year_high_low">Newest</option>
            <option value="year_low_high">Oldest</option>
            <option value="price_low_high">Price Asc</option>
            <option value="price_high_low">Price Desc</option>
          </select>
        </div>

        <div
          className="
          catalog__filter
          grid__item
          grid__item--phone-3-4
          grid__item--tablet-5-7
          grid__item--desktop-5-7
        "
        >
          <p className="catalog__filter-title">Items on page</p>
          <select
            className="catalog__filter-sort-by"
            defaultValue="10"
            onChange={(e) => handleChangeTotalPages(Number(e.target.value))}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>

      <div className="catalog__phones grid--catalog grid">
        {phones.map((phone) => (
          <ProductCard
            phone={phone}
            key={phone.name}
            isChekedProductId={isChekedProductId}
            onCart={handleAddToCart}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

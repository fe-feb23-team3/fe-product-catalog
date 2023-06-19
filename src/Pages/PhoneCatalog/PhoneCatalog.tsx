/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilteredPhones } from '../../api/phones';
import { PhoneData } from '../../types/phoneData';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/Loader';

import './PhoneCatalog.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';

interface Props {
  itemsCart: { id: string, count: number }[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
  phonesCount: number;
}

export const PhoneCatalog: React.FC<Props> = ({
  itemsCart,
  itemsFavourites,
  onCart,
  onFavourites,
  phonesCount,
}) => {
  const [phones, setPhones] = useState<PhoneData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhones, setTotalPhones] = useState(8);
  const [sortBy, setSortBy] = useState('default');
  const [totalPages, setTotalPages] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [, setSearchParams] = useSearchParams('');

  const breadcrumbsPath = [
    { text: 'Phones', link: '' },
  ];

  const loadPhonesByPage = async (page: string) => {
    setIsLoading(true);
    const info = await getFilteredPhones(`${page}`);
    const visiblePhonesFromServer = info.visiblePhones;
    const totalPagess = info.pages;

    setTotalPages(totalPagess);
    setPhones(visiblePhonesFromServer);
    setIsLoading(false);
  };

  if (totalPages < currentPage) {
    setCurrentPage(totalPages);
  }

  useEffect(() => {
    if (sortBy === 'default') {
      setSearchParams(`page=${currentPage}&size=${totalPhones}`);
    } else {
      setSearchParams(`page=${currentPage}&sort=${sortBy}&size=${totalPhones}`);
    }

    loadPhonesByPage(`page=${currentPage}&sort=${sortBy}&size=${totalPhones}`);
  }, [totalPhones, sortBy, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: String(page) });
  };

  const handleChangeTotalPages = (total: number) => {
    setTotalPhones(total);
    setSearchParams({ size: String(total) });
  };

  const handleSortBy = (sort: string) => {
    setSortBy(sort);
    setSearchParams({ sort });
  };

  return (
    <section className="catalog">
      <Breadcrumbs path={breadcrumbsPath} />

      <div className="catalog__title">
        <PageTitle title="Phones" />
      </div>

      <div className="catalog__item-count">{`${phonesCount} models`}</div>

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
              Select
            </option>
            <option value="year_desc">Newest</option>
            <option value="year_asc">Oldest</option>
            <option value="price_asc">Price Asc</option>
            <option value="price_desc">Price Desc</option>
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

      <Loader isLoading={isLoading} />

      <div className="catalog__phones grid--catalog grid">
        {!isLoading
          && phones.map((phone) => (
            <ProductCard
              phone={phone}
              key={phone.name}
              itemsCart={itemsCart}
              onCart={onCart}
              itemsFavourites={itemsFavourites}
              onFavourites={onFavourites}
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

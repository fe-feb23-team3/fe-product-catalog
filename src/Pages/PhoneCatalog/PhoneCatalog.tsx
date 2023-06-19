/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
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
  const [totalPages, setTotalPages] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');

  const location = useLocation();

  const currentPage = searchParams.get('page') || '1';
  const totalPhones = searchParams.get('size') || '8';
  const sortBy = searchParams.get('sort') || 'default';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (totalPages < Number(currentPage)) {
    setSearchParams({ page: `${totalPages}` });
  }

  useEffect(() => {
    loadPhonesByPage(`${location.search}`);
    scrollToTop();
  }, [totalPhones, sortBy, currentPage]);

  const handlePageChange = (page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  const handleChangeTotalPages = (total: number) => {
    searchParams.set('size', String(total));
    setSearchParams(searchParams);
  };

  const handleSortBy = (sort: string) => {
    searchParams.set('sort', sort);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
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
            value={sortBy}
            onChange={(e) => handleSortBy(e.target.value)}
          >
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
            value={totalPhones}
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
        currentPage={Number(currentPage)}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';
import './ItemCard.scss';
import classNames from 'classnames';
import { getItemCardDataById } from '../../api/phones';
import { ItemCardData } from '../../types/itemCardData';
import { RecomendModelsForItemCard } from '../../PageSections/RecomendModels/RecomendModelsForItemCard';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Breadcrumb } from '../../types/breadcrumbs';
import { BackLink } from '../../components/BackLink';
import { PageTitle } from '../../components/PageTitle';
import { ButtonAddToCart } from '../../components/ButtonAddToCart';
import { ButtonFavourites } from '../../components/ButtonFavourites';
import { AvailableColors } from '../../components/AvailableColors';
import { AvailableCapacity } from '../../components/AvailableCapacity';

interface Props {
  itemsCart: { id: string, count: number }[];
  itemsFavourites: string[];
  onCart: (productId: string) => void;
  onFavourites: (productId: string) => void;
}

export const ItemCard: React.FC<Props> = ({
  onCart,
  onFavourites,
  itemsCart,
  itemsFavourites,
}) => {
  const { pathname } = useLocation();

  const [cardData, setCardData] = useState<ItemCardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [breadcrumbsPath, setBreadcrumbsPath] = useState<Breadcrumb[]>([]);

  const navigate = useNavigate();

  const url = window.location.hash;
  const splitedUrl = url.split('/');
  const itemName = splitedUrl[2];

  const loadPhoneData = async () => {
    setIsLoading(true);
    const desiredPhone = await getItemCardDataById(itemName);
    const updatedBreadcrumbsPath = [{ text: 'Phones', link: '/phones' }, { text: desiredPhone.name, link: '' }];

    setBreadcrumbsPath(updatedBreadcrumbsPath);
    setCardData(desiredPhone);
    setIsLoading(false);
  };

  const handleSelectImage = useCallback((imageIndex: number) => setMainImage(imageIndex), []);

  const handleSelectOptions = (
    chosenCapacity: string,
    chosenColor: string,
  ) => {
    if (chosenColor) {
      const urlWithColor = `/phoneCardData/${cardData?.namespaceId}-${chosenCapacity}-${chosenColor}`;

      navigate(urlWithColor);
    }

    if (chosenCapacity) {
      const urlWithCapacity = `/phoneCardData/${cardData?.namespaceId}-${chosenCapacity}-${chosenColor}`;

      navigate(urlWithCapacity);
    }
  };

  useEffect(() => {
    loadPhoneData();
  }, [pathname]);

  return (
    isLoading ? (
      <Loader isLoading />
    ) : (
      cardData && (
        <div className="item__card">
          <Breadcrumbs path={breadcrumbsPath} />
          <BackLink />

          <div className="item__card-title">
            <PageTitle title={cardData.name} />
          </div>

          <div className="grid">
            <div
              className="
            phone__photo-wraper
            grid__item--desktop-1-12
            grid__item--tablet-1-7
            grid__item--phone-1-4"
            >
              <div className="phone__photo-wraper--main" />
              <div
                className="
              grid__item--desktop-3-10
              grid__item--tablet-3-7
              grid__item--phone-1-4"
              >
                <div className="phone__photo">
                  <img
                    src={`https://be-product-catalog.onrender.com/phoneCardData/${cardData.id}/images/${mainImage}`}
                    alt="phone"
                    className="phone__photo--main"
                  />
                </div>
              </div>

              <div
                className="
              grid__item--desktop-1-2
              grid__item--tablet-1-2
              grid__item--phone-1-4"
              >
                <div className="phone__photo-mapping">
                  {cardData.images.map(image => (
                    <div
                      key={uuid4()}
                      className="phone__photo-container"
                      onClick={() => handleSelectImage(cardData.images.indexOf(image))}
                    >
                      <img
                        src={`https://be-product-catalog.onrender.com/phoneCardData/${cardData.id}/images/${cardData.images.indexOf(image)}`}
                        alt=""
                        className={
                          classNames('phone__photo--small', {
                            'phone__photo--small--active': cardData.images.indexOf(image) === mainImage,
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="
            grid__item--desktop-13-19
            grid__item--tablet-8-12
            grid__item--phone-1-4"
            >
              <div className="controllers">
                <AvailableColors
                  data={cardData}
                  onSelectOption={handleSelectOptions}
                />
              </div>

              <AvailableCapacity
                data={cardData}
                onSelectOption={handleSelectOptions}
              />

              <div className="price">
                <span className="price__new">{`$${cardData.priceDiscount}`}</span>
                <span className="price__old">{`$${cardData.priceRegular}`}</span>
              </div>

              <div className="add-to-cart">
                <div className="add-to-cart__button">
                  <ButtonAddToCart
                    items={itemsCart}
                    itemId={cardData.id}
                    onClick={onCart}
                  />
                </div>

                <div className="add-to-cart__favourites">
                  <ButtonFavourites
                    items={itemsFavourites}
                    itemId={cardData.id}
                    onClick={onFavourites}
                  />
                </div>
              </div>

              <div className="characteristics">
                <div className="characteristics__title">
                  <p className="characteristics__item">Screen</p>
                  <p className="characteristics__item">Resolution</p>
                  <p className="characteristics__item">Processor</p>
                  <p className="characteristics__item">RAM</p>
                </div>

                <div className="characteristics__description">
                  <p className="characteristics__item">{cardData.screen}</p>
                  <p className="characteristics__item">{cardData.resolution}</p>
                  <p className="characteristics__item">{cardData.processor}</p>
                  <p className="characteristics__item">{cardData.ram}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid">
            <div
              className="
            grid__item--desktop-1-11
            grid__item--tablet-1-12
            grid__item--phone-1-4"
            >
              <div className="about">
                <h2 className="about__title">About</h2>
                <h3 className="about__paragraph-title">
                  {cardData.description[0].title}
                </h3>

                <p className="about__text">{cardData.description[0].text[0]}</p>

                <p className="about__text">{cardData.description[0].text[1]}</p>

                <h3 className="about__paragraph-title">
                  {cardData.description[1].title}
                </h3>

                <p className="about__text">{cardData.description[1].text[0]}</p>

                <h3 className="about__paragraph-title">
                  {cardData.description[2].title}
                </h3>

                <p className="about__text">{cardData.description[2].text[0]}</p>
              </div>
            </div>

            <div
              className="
            grid__item--desktop-13-24
            grid__item--tablet-1-12
            grid__item--phone-1-4"
            >
              <div className="tech-specs">
                <h2 className="tech-specs__title">Tech specs</h2>
                <div className="tech-specs__container">
                  <div className="tech-specs__name">
                    <p className="tech-specs__item">Screen</p>
                    <p className="tech-specs__item">Resolution</p>
                    <p className="tech-specs__item">Processor</p>
                    <p className="tech-specs__item">RAM</p>
                    <p className="tech-specs__item">Built in memory</p>
                    <p className="tech-specs__item">Camera</p>
                    <p className="tech-specs__item">Zoom</p>
                    <p className="tech-specs__item">Cell</p>
                  </div>

                  <div className="tech-specs__description">
                    <p className="tech-specs__item">{cardData.screen}</p>
                    <p className="tech-specs__item">{cardData.resolution}</p>
                    <p className="tech-specs__item">{cardData.processor}</p>
                    <p className="tech-specs__item">{cardData.ram}</p>
                    <p className="tech-specs__item">{cardData.capacity}</p>
                    <p className="tech-specs__item">{cardData.camera}</p>
                    <p className="tech-specs__item">{cardData.zoom}</p>
                    <p className="tech-specs__item">{cardData.cell.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recomended">
            {cardData && (
              <RecomendModelsForItemCard
                id={cardData.id}
                title="You may also like"
                onCart={onCart}
                onFavourites={onFavourites}
                itemsCart={itemsCart}
                itemsFavourites={itemsFavourites}
              />
            )}
          </div>
        </div>
      )
    )
  );
};

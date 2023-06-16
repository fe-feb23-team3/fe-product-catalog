/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './ItemCard.scss';
import classNames from 'classnames';
import { PhoneColors } from '../../types/PhoneColors';
import home from '../images/home.svg';
import arrowGreyRight from '../images/arrow_grey_right.svg';
import arrowGreyLeft from '../images/arrow_grey_left.svg';
import arrowBlackLeft from '../images/Stroke.svg';
import arrowBlackRight from '../images/arrow_black_right.svg';
import favourites from '../images/favourites.svg';
import { getItemCardDataById, getRecommendedPhones } from '../../api/phones';
import { ItemCardData } from '../../types/itemCardData';
import { Loader } from '../Loader';
// import { RecomendModels } from '../RecomendModels';

export const ItemCard: React.FC = () => {
  const { pathname } = useLocation();

  const [cardData, setCardData] = useState<ItemCardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [selectedCapacity, setSelectedCapacity] = useState(cardData?.capacity);

  const navigate = useNavigate();

  const url = window.location.hash;
  const splitedUrl = url.split('/');
  const itemName = splitedUrl[2];

  const loadPhoneData = async () => {
    setIsLoading(true);
    const desiredPhone = await getItemCardDataById(itemName);

    setCardData(desiredPhone);
    setIsLoading(false);
  };

  const handleSelectImage = useCallback((imageIndex: number) => setMainImage(imageIndex), []);

  const handleSelectOptions = (
    chosenCapacity: string,
    chosenColor: string,
  ) => {
    if (chosenColor) {
      setSelectedCapacity(chosenCapacity);
      const urlWithColor = `/phoneCardData/${cardData?.namespaceId}-${chosenCapacity}-${chosenColor}`;

      navigate(urlWithColor);
    }

    if (chosenCapacity) {
      setSelectedCapacity(chosenCapacity);
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
          <div className="path">
            <img src={home} alt="home" className="path__item" />

            <img src={arrowGreyRight} alt="arrow right" className="path__item" />

            <p className="path__item-text">Phones</p>

            <img src={arrowGreyRight} alt="arrow right" className="path__item" />

            <p className="path__item-text">{cardData?.name}</p>
          </div>

          <NavLink to="/" className="back__link">
            <img
              src={arrowBlackLeft}
              alt="arrow left"
              className="back__link-item"
            />

            <p className="back__link-name">Back</p>
          </NavLink>

          <h1 className="title">{cardData?.name}</h1>

          <div className="grid">
            <div
              className="
            phone__photo-wraper
            grid__item--desktop-1-12
            grid__item--tablet-1-7
            grid__item--phone-1-4"
            >
              <div
                className="
              grid__item--desktop-3-10
              grid__item--tablet-3-7
              grid__item--phone-1-4"
              >
                <div className="phone__photo">
                  <img
                    src={`https://be-product-catalog.onrender.com/phoneCardData/${cardData?.id}/images/${mainImage}`}
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
                {cardData?.images.map(image => (
                  <div
                    key={image}
                    className="phone__photo-container"
                    onClick={() => handleSelectImage(cardData?.images.indexOf(image))}
                  >
                    <img
                      src={`https://be-product-catalog.onrender.com/phoneCardData/${cardData?.id}/images/${cardData?.images.indexOf(image)}`}
                      alt=""
                      className="phone__photo--small"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
            grid__item--desktop-13-19
            grid__item--tablet-8-12
            grid__item--phone-1-4"
            >
              <div className="controllers">
                <div className="colors">
                  <div className="controllers__title">
                    <p>Available colors</p>
                    <p>{`ID: ${cardData?.namespaceId}`}</p>
                  </div>

                  <div className="colors__circle-container">
                    {cardData?.colorsAvailable.map(color => (
                      <Link
                        to={`/phoneCardData/${cardData?.namespaceId}-${cardData?.capacity.toLowerCase()}-${color}`}
                        key={color}
                      >
                        <div className="colors__circle">
                          <div
                            className={
                              classNames('colors__circle-item', {
                                'colors__circle-item--active': color === cardData.color,
                              })
                            }
                            style={{
                              backgroundColor: PhoneColors[color as keyof typeof PhoneColors],
                            }}
                            onClick={() => handleSelectOptions('', color)}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="capacity">
                <p>Select capacity</p>
                <div className="capacity__container">
                  {cardData?.capacityAvailable.map((capacity) => (
                    <Link
                      to={`/phoneCardData/${cardData?.namespaceId}-${capacity.toLowerCase()}-${cardData?.color}`}
                      key={cardData?.id}
                      className="capacity__link"
                    >
                      <div
                        className={
                          classNames('capacity__button', {
                            'capacity__button--active': capacity === cardData.capacity,
                          })
                        }
                        onClick={() => handleSelectOptions(capacity, '')}
                      >
                        {capacity}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="price">
                <span className="price__new">{`$${cardData?.priceDiscount}`}</span>
                <span className="price__old">{`$${cardData?.priceRegular}`}</span>
              </div>

              <div className="add-to-cart">
                <button type="button" className="add-to-cart__button">
                  Add to cart
                </button>
                <img
                  src={favourites}
                  alt="favourites"
                  className="add-to-cart__favourites"
                />
              </div>

              <div className="characteristics">
                <div className="characteristics__title">
                  <p className="characteristics__item">Screen</p>
                  <p className="characteristics__item">Resolution</p>
                  <p className="characteristics__item">Processor</p>
                  <p className="characteristics__item">RAM</p>
                </div>

                <div className="characteristics__description">
                  <p className="characteristics__item">{cardData?.screen}</p>
                  <p className="characteristics__item">{cardData?.resolution}</p>
                  <p className="characteristics__item">{cardData?.processor}</p>
                  <p className="characteristics__item">{cardData?.ram}</p>
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
                  {cardData?.description[0].title}
                </h3>

                <p className="about__text">{cardData?.description[0].text[0]}</p>

                <p className="about__text">{cardData?.description[0].text[1]}</p>

                <h3 className="about__paragraph-title">
                  {cardData?.description[1].title}
                </h3>

                <p className="about__text">{cardData?.description[1].text[0]}</p>

                <h3 className="about__paragraph-title">
                  {cardData?.description[2].title}
                </h3>

                <p className="about__text">{cardData?.description[2].text[0]}</p>
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
                    <p className="tech-specs__item">{cardData?.screen}</p>
                    <p className="tech-specs__item">{cardData?.resolution}</p>
                    <p className="tech-specs__item">{cardData?.processor}</p>
                    <p className="tech-specs__item">{cardData?.ram}</p>
                    <p className="tech-specs__item">{cardData?.capacity}</p>
                    <p className="tech-specs__item">{cardData?.camera}</p>
                    <p className="tech-specs__item">{cardData?.zoom}</p>
                    <p className="tech-specs__item">{cardData?.cell.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recomended">
            <div className="recomended__container">
              <h2 className="recomended__title">You may also like</h2>

              <div className="arrow">
                <img
                  src={arrowGreyLeft}
                  alt="arrow left"
                  className="arrow-icon arrow-icon--grey"
                />

                <img
                  src={arrowBlackRight}
                  alt="arrow right"
                  className="arrow-icon arrow-icon--black"
                />
              </div>
            </div>
          </div>

          {/* <RecomendModels
          title="You may also like"
          getPhones={getRecommendedPhones}
          onCart={onCart}
          onFavourites={onFavourites}
          itemsCart={itemsCart}
          itemsFavourites={itemsFavourites}
        /> */}
        </div>
      )
    )
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ItemCard.scss';
import { getItemCardDataById, getRecommendedPhones } from '../../api/phones';
import { ItemCardData } from '../../types/itemCardData';
import { RecommendModels } from '../../PageSections/RecomendModels/RecomendModelsForHomePage';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Breadcrumb } from '../../types/breadcrumbs';
import { BackLink } from '../../components/BackLink';
import { PageTitle } from '../../components/PageTitle';
import { ButtonAddToCart } from '../../components/ButtonAddToCart';
import { ButtonFavourites } from '../../components/ButtonFavourites';
import { AvailableColors } from '../../components/AvailableColors';
import { AvailableCapacity } from '../../components/AvailableCapacity';
import { Price } from '../../components/Price';
import { TechSpecs } from '../../components/TechSpecs';
import { Characteristics } from '../../components/Characteristics';
import { About } from '../../components/About';
import { MainPhoneImage } from '../../components/MainPhoneImage';
import { SecondaryPhoneImage } from '../../components/SecondaryPhoneImage';
import { PhoneData } from '../../types/phoneData';

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
  const [phones, setPhones] = useState<PhoneData[]>([]);

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

  const loadRecommendedPhones = async () => {
    const loadPhones = await getRecommendedPhones(itemName);
    const visiblePhonesFromServer = loadPhones;

    setPhones(visiblePhonesFromServer);
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
    loadRecommendedPhones();
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
            phone__image-wraper
            grid__item--desktop-1-12
            grid__item--tablet-1-7
            grid__item--phone-1-4"
            >
              <div />
              <div
                className="
              grid__item--desktop-3-10
              grid__item--tablet-3-7
              grid__item--phone-1-4"
              >
                <MainPhoneImage
                  data={cardData}
                  mainImage={mainImage}
                />
              </div>

              <div
                className="
              grid__item--desktop-1-2
              grid__item--tablet-1-2
              grid__item--phone-1-4"
              >
                <SecondaryPhoneImage
                  data={cardData}
                  mainImage={mainImage}
                  onImageSelect={handleSelectImage}
                />
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

                <AvailableCapacity
                  data={cardData}
                  onSelectOption={handleSelectOptions}
                />

                <Price data={cardData} />

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
              </div>

              <Characteristics data={cardData} />
            </div>
          </div>

          <div className="grid">
            <div
              className="
            grid__item--desktop-1-11
            grid__item--tablet-1-12
            grid__item--phone-1-4"
            >
              <About data={cardData} />
            </div>

            <div
              className="
            grid__item--desktop-13-24
            grid__item--tablet-1-12
            grid__item--phone-1-4"
            >
              <TechSpecs data={cardData} />
            </div>
          </div>

          <div className="recomended">
            {cardData && (
              <RecommendModels
                title="You may also like"
                phones={phones}
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

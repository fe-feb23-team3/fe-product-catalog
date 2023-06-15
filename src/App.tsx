import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './utils/useLocalStorage';
import './App.scss';
import { HomePage } from './components/HomePage';
import { PhoneCatalog } from './components/PhoneCatalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TabletsCatalog } from './components/TabletsCatalog';
import { Accessories } from './components/Accessories';
import { Favourites } from './components/Favourites';
import { Cart } from './components/Cart';
import { NotFoundPage } from './components/NotFoundPage';
import { Menu } from './components/Menu';
import { ItemCard } from './components/ItemCard';

export const App: React.FC = () => {
  const [itemsCart, setItemsCart] = useState<string[]>([]);
  const [itemsCartLocalStorage, setItemsCartLocalStorage] = useLocalStorage('itemsCart', itemsCart);
  const [, setItemsAndAmounts] = useLocalStorage('itemsAndAmounts', {});
  const [countItemsOfCart, setCountItemsOfCart] = useLocalStorage('countItemsOfCart', 0);
  const [itemsCount, setItemsCount] = useState(itemsCartLocalStorage.length);

  const [itemsFavourites, setItemsFavourites] = useState<string[]>([]);

  useEffect(() => {
    setItemsCart(itemsCartLocalStorage);
  }, []);

  useEffect(() => {
    if (itemsCart.length) {
      setItemsCartLocalStorage(() => itemsCart);
    }

    if (countItemsOfCart) {
      setItemsCount(Number(countItemsOfCart));
    } else {
      setItemsCount(itemsCart.length);
    }
  }, [itemsCart]);

  const handleAddToCart = useCallback(
    (productId) => {
      if (itemsCart.includes(productId)) {
        setItemsCart(itemsCart.filter((item) => item !== productId));

        return;
      }

      setItemsCart((currentId) => [...currentId, productId]);
    },
    [itemsCart],
  );

  const handleClearCart = () => {
    setItemsCart([]);
    setItemsCartLocalStorage([]);
    setItemsAndAmounts({});
    setCountItemsOfCart(0);
  };

  const handleAddToFavourites = useCallback(
    (productId) => {
      if (itemsFavourites.includes(productId)) {
        setItemsFavourites(
          itemsFavourites.filter((item) => item !== productId),
        );

        return;
      }

      setItemsFavourites((currentId) => [...currentId, productId]);
    },
    [itemsFavourites],
  );

  return (
    <body className="body">
      <div className="wrapper">
        <Header itemsCount={itemsCount} itemsFavourites={itemsFavourites} />

        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/phones">
                <Route
                  index
                  element={(
                    <PhoneCatalog
                      onCart={handleAddToCart}
                      onFavourites={handleAddToFavourites}
                      itemsCart={itemsCart}
                      itemsFavourites={itemsFavourites}
                    />
                  )}
                />
              </Route>

              <Route path="/tablets">
                <Route index element={<TabletsCatalog />} />
              </Route>

              <Route path="/accessories">
                <Route index element={<Accessories />} />
              </Route>

              <Route path="/favourites">
                <Route index element={<Favourites />} />
              </Route>

              <Route path="/cart">
                <Route
                  index
                  element={(
                    <Cart
                      onCart={handleAddToCart}
                      onClear={handleClearCart}
                    />
                  )}
                />
              </Route>

              <Route path="/phoneCardData/:itemId">
                <Route index element={<ItemCard />} />
              </Route>

              <Route path="/menu">
                <Route index element={<Menu />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </body>
  );
};

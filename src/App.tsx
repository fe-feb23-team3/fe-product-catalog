import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage';
import { PhoneCatalog } from './Pages/PhoneCatalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TabletsCatalog } from './components/TabletsCatalog';
import { Accessories } from './components/Accessories';
import { Favourites } from './components/Favourites';
import { Cart } from './components/Cart';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Menu } from './components/Menu';
import { ItemCard } from './components/ItemCard';

export const App: React.FC = () => {
  const [countAdditionalCart, setCountAdditionalCart] = useState(0);
  const [itemsCart, setItemsCart] = useState<string[]>([]);
  const [itemsFavourites, setItemsFavourites] = useState<string[]>([]);

  const itemsCount = countAdditionalCart + itemsCart.length;

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
              <Route
                path="/"
                element={(
                  <HomePage
                    onCart={handleAddToCart}
                    onFavourites={handleAddToFavourites}
                    itemsCart={itemsCart}
                    itemsFavourites={itemsFavourites}
                  />
                )}
              />

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
                      itemsCart={itemsCart}
                      onCart={handleAddToCart}
                      onCount={setCountAdditionalCart}
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

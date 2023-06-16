import React, { useCallback } from 'react';
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
  const [itemsCart, setItemsCart] = useLocalStorage<{id: string, count: number}[]>('itemsCart', []);

  const allCountOfItemsInCart = itemsCart.map(item => item.count).reduce((p, c) => p + c, 0);

  const handleAddItemToCart = useCallback((productId) => {
    if (itemsCart.some((item) => item.id === productId)) {
      setItemsCart(itemsCart.filter((item) => item.id !== productId));

      return;
    }

    setItemsCart((currentId) => [...currentId, { id: productId, count: 1 }]);
  },
  [itemsCart]);

  const handleClearCart = () => {
    setItemsCart([]);
  };

  const handleChangeCountOfItemOfCart = (id: string, plusOrMinus: boolean) => {
    const indexItem = itemsCart.findIndex(item => item.id === id);
    const countOfItem = itemsCart[indexItem].count;
    const copyItemsCart = JSON.parse(JSON.stringify(itemsCart));

    if (plusOrMinus) {
      copyItemsCart[indexItem].count = countOfItem + 1;
    } else {
      copyItemsCart[indexItem].count = countOfItem - 1;
    }

    setItemsCart(copyItemsCart);
  };

  const [itemsFavourites, setItemsFavourites] = useLocalStorage<string[]>('idsFavourites', []);

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
        <Header itemsCount={allCountOfItemsInCart} itemsFavourites={itemsFavourites} />

        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/phones">
                <Route
                  index
                  element={(
                    <PhoneCatalog
                      onCart={handleAddItemToCart}
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
                      onCart={handleAddItemToCart}
                      onClear={handleClearCart}
                      onCoutnChange={handleChangeCountOfItemOfCart}
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

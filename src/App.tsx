import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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

export const App: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <body className="body">
      <div className="wrapper">
        <Header />
        <main className="main">
          {/* Example how to use grid */}
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/phones">
                <Route index element={<PhoneCatalog />} />
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
                <Route index element={<Cart />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        {!isMobile && <Footer />}
      </div>
    </body>
  );
};

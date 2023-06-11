import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage';
import { PhoneCatalog } from './components/PhoneCatalog';
import { Header } from './components/Header';
import { TabletsCatalog } from './components/TabletsCatalog';
import { Accessories } from './components/Accessories';
import { Favourites } from './components/Favourites';
import { Cart } from './components/Cart';

export const App: React.FC = () => {
  return (
    <>
      <Header />

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
      </Routes>
    </>
  );
};

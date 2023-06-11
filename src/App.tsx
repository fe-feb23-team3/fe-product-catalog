import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage';
import { PhoneCatalog } from './components/PhoneCatalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TabletsCatalog } from './components/TabletsCatalog';
import { Accessories } from './components/Accessories';
import { Favourites } from './components/Favourites';
import { Cart } from './components/Cart';

export const App: React.FC = () => {
  return (
    <body className="body">
      <div className="wrapper">
        <Header />
        <main className="main">
          {/* Example how to use grid */}
          <div className="container grid">
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhoneCatalog />} />
            <Route path="/tablets" element={<TabletsCatalog />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </body>
  );
};

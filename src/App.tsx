import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import image from './components/images/beaver_logo.jpg';
import { HomePage } from './components/HomePage';
import { PhoneCatalog } from './components/PhoneCatalog';

export const App: React.FC = () => {
  return (
    <>
      <img src={image} alt="beaver" className="logo" />

      {/* Example how to use grid */}
      <div className="cover container grid">
        <h1
          className="
          title
          grid__item
          grid__item--phone-1-2
          grid__item--tablet-4-8
          grid__item--desktop-15-20
        "
        >
          There will be a project soon...
        </h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneCatalog />} />
      </Routes>
    </>
  );
};

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import image from './images/beaver_logo.jpg';
import { HomePage } from './HomePage';
import { PhoneCatalog } from './PhoneCatalog';

export const App: React.FC = () => {
  return (
    <>
      <img
        src={image}
        alt="beaver"
        className="logo"
      />
      <div className="cover">
        <h1 className="title">There will be a project soon...</h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneCatalog />} />
      </Routes>
    </>
  );
};

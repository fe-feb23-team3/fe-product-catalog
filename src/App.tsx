import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import image from './components/images/beaver_logo.jpg';
import { HomePage } from './components/HomePage';
import { PhoneCatalog } from './components/PhoneCatalog';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
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

import React from 'react';
import './App.scss';
import image from './images/beaver_logo.jpg';

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
    </>
  );
};

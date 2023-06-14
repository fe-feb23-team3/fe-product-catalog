import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import './Loader.scss';

interface Props {
  isLoading: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading }) => (
  <div className="loader">
    <ColorRing
      visible={isLoading}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e4b04d', '#e9a546', '#ed9841', '#f0893e', '#f2793c']}
    />
  </div>
);

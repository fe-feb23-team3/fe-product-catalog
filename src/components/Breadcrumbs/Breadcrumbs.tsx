import React from 'react';
import { v4 as uuid4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import home from '../images/home.svg';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import './Breadcrumbs.scss';
import { Breadcrumb } from '../../types/breadcrumbs';

interface Props {
  path: Breadcrumb[];
}

export const Breadcrumbs: React.FC<Props> = ({ path }) => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/" className="breadcrumbs__link-home">
        <img src={home} alt="home" className="breadcrumbs_home-icon" />
      </NavLink>

      {path.map((item) => (
        item.link === ''
          ? (
            <span className="breadcrumbs__link-disabled" key={uuid4()}>
              <BreadcrumbsItem text={item.text} />
            </span>
          )
          : (
            <NavLink
              to={item.link}
              className="breadcrumbs__link-active"
              key={uuid4()}
            >
              <BreadcrumbsItem text={item.text} />
            </NavLink>
          )
      ))}
    </div>
  );
};

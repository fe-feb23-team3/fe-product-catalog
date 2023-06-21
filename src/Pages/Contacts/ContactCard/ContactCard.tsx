import React from 'react';
import './ContactCard.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  name: string,
  position: string,
  photo: string,
  phone: string,
  email: string,
  linkedIn: string,
  github: string,
}

export const ContactCard: React.FC<Props> = ({
  name,
  position,
  photo,
  phone,
  email,
  linkedIn,
  github,
}) => {
  return (
    <div className="teamCard__container">
      <div className="teamCard__top-wrapper">
        <div className="image__wrapper">
          <img
            src={photo}
            alt={name}
            className="teamCard__photo"
          />
        </div>

        <h2 className="teamCard__name">{name}</h2>

        <p className="teamCard__position">{position}</p>

        <div className="teamCard__divider"></div>

        <div className="teamCard__links">
          <NavLink to={`tel:${phone}`} className="teamCard__links-social">
            <i className="fa fa-phone"></i>
          </NavLink>
          <NavLink to={`mailto:${email}`} className="teamCard__links-social">
            <i className="fa fa-envelope-o"></i>
          </NavLink>
          <NavLink to={linkedIn} className="teamCard__links-social" target="_blank">
            <i className="fa fa-linkedin"></i>
          </NavLink>
          <NavLink to={github} className="teamCard__links-social" target="_blank">
            <i className="fa fa-github"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

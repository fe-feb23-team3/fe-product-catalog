import React from 'react';
import './About.scss';
import { ItemCardData } from '../../types/itemCardData';

interface Props {
  data: ItemCardData;
}

export const About: React.FC<Props> = ({ data }) => {
  const { description } = data;

  return (
    <div className="about">
      <h2 className="about__title">About</h2>
      <h3 className="about__paragraph-title">
        {description[0].title}
      </h3>

      <p className="about__text">{description[0].text[0]}</p>

      <p className="about__text">{description[0].text[1]}</p>

      <h3 className="about__paragraph-title">
        {description[1].title}
      </h3>

      <p className="about__text">{description[1].text[0]}</p>

      <h3 className="about__paragraph-title">
        {description[2].title}
      </h3>

      <p className="about__text">{description[2].text[0]}</p>
    </div>
  );
};

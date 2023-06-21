import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import { ContactCard } from './ContactCard';

export const Contacts: React.FC = () => {
  const breadcrumbsPath = [
    { text: 'Contacts', link: '' },
  ];

  return (
    <>
      <Breadcrumbs path={breadcrumbsPath} />

      <div className="catalog__title">
        <PageTitle title="Contacts" />
      </div>

      <div className="grid--catalog grid">
        <ContactCard
          name="Nikita Zadorozhnyi"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04NA7SV9ED-13e5f40d2174-512"
          phone=""
          email=""
          linkedIn=""
          github=""
        />
        <ContactCard
          name="Nazarii Chepil"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04J0K9BENL-52a711ba5f00-512"
          phone=""
          email=""
          linkedIn=""
          github=""
        />
        <ContactCard
          name="Valery Sazonov"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04L2U9QWH0-3d82f5167468-512"
          phone="+380668149711"
          email="vksazonov@gmail.com"
          linkedIn="https://www.linkedin.com/in/valery-sazonov-a74b46277/"
          github="https://github.com/vksazonov"
        />
        <ContactCard
          name="Vadim Tkachenko"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04JL6D298R-7b6087428888-512"
          phone=""
          email=""
          linkedIn=""
          github=""
        />
        <ContactCard
          name="Maksym Didyk"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04MUMFF22Z-ef7d0bb83c16-512"
          phone="+380669469634"
          email="didyk.maksym@gmail.com"
          linkedIn="https://www.linkedin.com/in/maksymdidyk/"
          github="https://github.com/maksym-didyk"
        />
        <ContactCard
          name="Stas Lukianchuk"
          position="Full stack developer"
          photo="https://ca.slack-edge.com/T0PE08HSR-U04KSJAU1G9-eebb1c138a9e-512"
          phone="+380963471979"
          email="stas.lukianchuk.dev@gmail.com"
          linkedIn="https://www.linkedin.com/in/stanislav-lukianchuk-a91912276/"
          github="https://github.com/StasLukianchuk"
        />
      </div>
    </>
  );
};

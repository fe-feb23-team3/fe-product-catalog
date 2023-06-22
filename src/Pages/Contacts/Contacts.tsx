import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PageTitle } from '../../components/PageTitle';
import { ContactCard } from './ContactCard';
import { devContacts } from './devContacts';
import './Contacts.scss';

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

      <div className="contacts-catalog">
        {devContacts.map((contact) => (
          <ContactCard
            key={contact.name}
            name={contact.name}
            position={contact.position}
            photo={contact.photo}
            phone={contact.phone}
            email={contact.email}
            linkedIn={contact.linkedIn}
            github={contact.github}
          />
        ))}
      </div>
    </>
  );
};

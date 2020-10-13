import React, { Fragment } from 'react';

import { ContentContainer } from '../components/styled/Containers';
import { AuthoritiesSection, SectionTitle } from '../components/styled/Sections';

const facultyAuthorities = [
  {
    id: '1',
    role: 'Dziekan Wydziału',
    title: 'dr hab. inż.',
    name: 'Jarosław',
    surname: 'Domański',
    phone: 111111111,
    email: 'dziekan@dziekan.pl',
    room: 137,
    hours: '11:00-13:30',
  },
  {
    id: '2',
    role: 'Prodziekan ds. Ogólnych',
    title: 'dr hab. inż.',
    name: 'Eryk',
    surname: 'Głodziński',
    phone: 222222222,
    email: 'ogolny@ogolny.pl',
    room: 101,
    hours: '11:00-13:30',
  },
  {
    id: '3',
    role: 'Prodziekan ds. Nauki',
    title: 'prof uczelni, dr hab. inż.',
    name: 'Anna',
    surname: 'Kosieradzka',
    phone: 333333333,
    email: 'nauka@nauka.pl',
    room: 137,
    hours: '11:00-13:30',
  },
  {
    id: '4',
    role: 'Prodziekan ds. Studiów',
    title: 'dr inż.',
    name: 'Krystyna Agata',
    surname: 'Lamparska-Jasińska',
    phone: 444444444,
    email: 'studia@studia.pl',
    room: 106,
    hours: '11:00-13:30',
  },
  {
    id: '5',
    role: 'Prodziekan ds. Studenckich',
    title: 'dr inż.',
    name: 'Grzegorz',
    surname: 'Kunikowski',
    phone: 555555555,
    email: 'studenckich@studenckich.pl',
    room: 101,
    hours: '11:00-13:30',
  },
];

const Authorities = () => {
  const authorities = facultyAuthorities.map(authority => (
    <ContentContainer key={authority.id} authorities>
      <AuthoritiesSection>
        <div className="authority-img">
          <p className="authority-img-temporary-text">Tymczasowy tekst w miejscu zdjęcia</p>
        </div>
        <div>
          <h2 className="authority-role">{authority.role}</h2>
          <p className="authority-info">{`${authority.title} ${authority.name} ${authority.surname}`}</p>
          <p className="authority-info">Telefon: {authority.phone}</p>
          <p className="authority-info">E-mail: {authority.email}</p>
          <p className="authority-info">Pokój: {authority.room}</p>
          <p className="authority-info">Godziny: {authority.hours}</p>
        </div>
      </AuthoritiesSection>
    </ContentContainer>
  ));

  return (
    <Fragment>
      <SectionTitle>Dziekani i Prodziekani Wydziału</SectionTitle>
      {authorities}
    </Fragment>
  );
};

export default Authorities;

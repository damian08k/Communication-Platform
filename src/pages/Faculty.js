import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { ContentContainer, FlexContainer } from '../components/styled/Containers';

const facultyMenu = [
  {
    id: '1',
    link: '/wydzial/aktualnosci',
    name: 'Aktualności',
  },
  {
    id: '2',
    link: '/wydzial/wladze',
    name: 'Władze Wydziału',
  },
  {
    id: '3',
    link: '/wydzial/dziekanat',
    name: 'Dziekanat',
  },
  {
    id: '4',
    link: '/wydzial/plany-zajec',
    name: 'Plany zajęć',
  },
  {
    id: '5',
    link: '/wydzial/praktyki-i-staze',
    name: 'Praktyki i staże',
  },
  {
    id: '6',
    link: '/wydzial/kursy',
    name: 'Kursy',
  },
  {
    id: '7',
    link: '/wydzial/faq',
    name: 'Najczęściej zadawane pytania',
  },
];

const Faculty = () => {
  const showFacultyMenuOptions = facultyMenu.map(menuOption => (
    <NavLink to={menuOption.link} key={menuOption.id} className="faculty-menu-options">
      <ContentContainer faculty>
        <p className="faculty-option-name">{menuOption.name}</p>
      </ContentContainer>
    </NavLink>
  ));
  return <FlexContainer>{showFacultyMenuOptions}</FlexContainer>;
};

export default Faculty;

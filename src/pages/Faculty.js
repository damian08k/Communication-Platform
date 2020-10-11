import React from 'react';
import { NavLink } from 'react-router-dom';

import { ContentContainer, FlexContainer } from '../components/styled/Containers';

const facultyMenu = [
  {
    id: '1',
    link: '/aktualnosci',
    name: 'Aktualności',
  },
  {
    id: '2',
    link: '/wladze',
    name: 'Władze Wydziału',
  },
  {
    id: '3',
    link: '/dziekanat',
    name: 'Dziekanat',
  },
  {
    id: '4',
    link: '/plany-zajec',
    name: 'Plany zajęć',
  },
  {
    id: '5',
    link: '/praktyki-i-staze',
    name: 'Praktyki i staże',
  },
  {
    id: '6',
    link: '/kursy',
    name: 'Kursy',
  },
  {
    id: '7',
    link: '/faq',
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

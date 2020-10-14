import React, { Fragment } from 'react';

import { ContentContainer } from '../components/styled/Containers';
import { PlansSection, SectionTitle } from '../components/styled/Sections';

const studiesTypes = [
  {
    id: '1',
    studiesType: 'Studia stacjonarne',
    link: 'https://wz.pw.edu.pl/Studia/Plany-zajec/Studia-stacjonarne/Zima-2020-21',
  },
  {
    id: '2',
    studiesType: 'Studia niestacjonarne',
    link: 'https://wz.pw.edu.pl/Studia/Plany-zajec/Studia-niestacjonarne/Zima-2020-21',
  },
];

const majors = ['Inżynieria Zarządzania', 'Zarządzanie', 'Zarządzanie Bezpieczeństwem Infrastruktury Technicznej'];

const Plans = () => {
  const buttonsValues = studiesTypes.map(({ id, studiesType, link }) => (
    <a href={link} key={id} className="studies-type-button">
      {studiesType}
    </a>
  ));

  const showPlans = majors.map(major => (
    <article key={major} className="plan">
      <h3 className="major-name"> {major} </h3>
      {buttonsValues}
    </article>
  ));

  return (
    <Fragment>
      <SectionTitle>Plany zajęć</SectionTitle>
      <ContentContainer>
        <PlansSection>{showPlans}</PlansSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Plans;

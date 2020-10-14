import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PracticesDocs from '../components/pages_components/faculty_page/PracticesDocs';
import PracticesOffers from '../components/pages_components/faculty_page/PracticesOffers';

import { InfoText, PracticesSection, SectionTitle } from '../components/styled/Sections';

const Practices = () => {
  return (
    <Fragment>
      <PracticesSection>
        <SectionTitle>Praktyki i staże</SectionTitle>
        <PracticesOffers />
        <PracticesDocs />
        <InfoText practices>
          Szczegółowe informacje związane z obowiązkowymi praktykami koniecznymi do zaliczenia w ramach realizacji studiów I stopnia, dostępne są pod{' '}
          <a href="https://wz.pw.edu.pl/Studia/Praktyki-studenckie">tym linkiem</a>. <br />W przypadku niejasności dokładnego procesu zaliczenia
          obowiązkowych praktyk należy kliknąć w <Link to="/faq">ten link</Link> a następnie w tabeli dostępnej na podstronie, znaleźć kategorię{' '}
          <span className="practices-special-info">Praktyki</span>.
        </InfoText>
      </PracticesSection>
    </Fragment>
  );
};

export default Practices;

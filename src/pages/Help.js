import React, { Fragment, useContext } from 'react';

import { AppContext } from '../AppProvider';

import DesktopTable from '../components/DesktopTable';
import MobileList from '../components/MobileList';

import { ContentContainer } from '../components/styled/Containers';
import { HelpSection, SectionTitle } from '../components/styled/Sections';

const HELP_TABLE_HEADINGS = ['Kategoria', 'Odpowiedź'];
const helpInfo = [
  {
    id: '1',
    question: 'Opis platformy',
    answer: 'Odpowiedź związana z tematem kategorii....',
  },
  {
    id: '2',
    question: 'RODO',
    answer: 'Odpowiedź związana z tematem kategorii....',
  },
  {
    id: '3',
    question: 'Jak korzystać z platformy?',
    answer: 'Odpowiedź związana z tematem kategorii....',
  },
  {
    id: '4',
    question: 'Inne aplikacje Wydziału',
    answer: 'Odpowiedź związana z tematem kategorii....',
  },
];

const changeWidth = 800;

const Help = () => {
  const { windowWidth } = useContext(AppContext);

  const showMobileHelpList = <MobileList info={helpInfo} />;
  const showDesktopHelpTable = <DesktopTable headings={HELP_TABLE_HEADINGS} info={helpInfo} />;

  const tableOrList = windowWidth > changeWidth ? showDesktopHelpTable : showMobileHelpList;

  return (
    <Fragment>
      <SectionTitle>Pomoc dotycząca użytkowania platformy</SectionTitle>
      <ContentContainer>
        <HelpSection>{tableOrList}</HelpSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Help;

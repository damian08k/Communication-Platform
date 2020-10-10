import React, { useContext } from 'react';

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

const Help = () => {
  const { windowWidth } = useContext(AppContext);

  const showMobileHelpList = <MobileList info={helpInfo} />;
  const showDesktopHelpTable = <DesktopTable headings={HELP_TABLE_HEADINGS} info={helpInfo} />;

  const show = windowWidth > 800 ? showDesktopHelpTable : showMobileHelpList;

  const tableOrList = showDesktopHelpTable;
  return (
    <ContentContainer>
      <HelpSection>
        <SectionTitle>Pomoc dotycząca użytkowania platformy</SectionTitle>
        {show}
      </HelpSection>
    </ContentContainer>
  );
};

export default Help;

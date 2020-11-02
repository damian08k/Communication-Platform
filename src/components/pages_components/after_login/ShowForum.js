import React, { Fragment, useContext } from 'react';

import ForumMainContent from './ForumMainContent';

import { AppContext } from '../../../AppProvider';

import { ContentContainer } from '../../styled/Containers';
import { SectionTitle } from '../../styled/Sections';

import { lecturerType, admWorkerType } from '../../../js/constants';

const forumContent = [
  {
    id: '1',
    panelTitle: 'Moje przedmioty',
    panelThreads: ['Projektowanie aplikacji mobilnych', 'Zarządzanie sieciami komputerowymi'],
  },
  {
    id: '2',
    panelTitle: 'Grupa studencka',
    panelThreads: ['Zajęcia', 'Pogadajmy'],
  },
  {
    id: '3',
    panelTitle: 'Inne',
    panelThreads: ['Informacje Wydziałowe', 'Pomagajmy sobie!'],
  },
];

const ShowForum = () => {
  const { userType } = useContext(AppContext);

  const showForumMainContent = forumContent.map(({ id, panelTitle, panelThreads }, index) => {
    if (userType === lecturerType) {
      if (index === 1) return null;
    } else if (userType === admWorkerType) {
      if (index === 0 || index === 1) return null;
    }

    return <ForumMainContent key={id} id={id} panelTitle={panelTitle} panelThreads={panelThreads} />;
  });

  return (
    <Fragment>
      <SectionTitle>Forum</SectionTitle>
      <ContentContainer>{showForumMainContent}</ContentContainer>
    </Fragment>
  );
};

export default ShowForum;

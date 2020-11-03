import React, { Fragment } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import SingleThread from './SingleThread';

import { ContentContainer } from '../../styled/Containers';
import { MainForumSection, SectionTitle } from '../../styled/Sections';

const categoryTopics = [
  {
    id: '1',
    topicTitle: 'Ogólne informacje dotyczące przedmiotu',
  },
  {
    id: '2',
    topicTitle: 'Kolokwium zaliczeniowe - 23 kwietnia 2020',
  },
  {
    id: '3',
    topicTitle: 'Zadanie 1',
  },
  {
    id: '4',
    topicTitle: 'Zadanie 2 - dodatkowe',
  },
];

const ShowCategoriesTopics = () => {
  const { url } = useRouteMatch();
  const showSingleThread = categoryTopics.map(({ id, topicTitle }, index) => <SingleThread key={id} thread={topicTitle} id={id} index={index} />);

  return (
    <Fragment>
      <SectionTitle>Programowanie aplikacji mobilnych</SectionTitle>
      <ContentContainer>
        <MainForumSection categories>
          <div className="forum-panel-container">
            <div className="forum-panel-title">
              <p className="panel-title">Tematy</p>
              <Link to={`${url}dodaj-temat`} className="add-topic-button">
                Dodaj temat
              </Link>
            </div>
            <div className="forum-panel-threads">{showSingleThread}</div>
          </div>
        </MainForumSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowCategoriesTopics;

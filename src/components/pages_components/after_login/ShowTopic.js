import React, { Fragment } from 'react';

import { ActionButton } from '../../styled/Buttons';
import { ContentContainer } from '../../styled/Containers';
import { MainForumSection, SectionTitle } from '../../styled/Sections';

import avatarIco from '../../../assets/images/avatar-ico.svg';

const ShowTopic = () => {
  return (
    <Fragment>
      <SectionTitle>Programowanie aplikacji mobilnych</SectionTitle>
      <ContentContainer>
        <MainForumSection>
          <div className="forum-panel-container">
            <div className="forum-panel-title">
              <p className="panel-title">Ogólne informacje dotyczące przedmiotu</p>
            </div>
            <div className="forum-panel-threads">
              <div className="topic-inside">
                <p className="topic-inside-text">Przykładowa zawartość tekstu w temacie...</p>
                <ol className="topic-inside-list">
                  <li>Warunek zaliczenia nr 1</li>
                  <li>Warunek zaliczenia nr 2</li>
                  <li>Warunek zaliczenia nr 3</li>
                </ol>
                <p className="topic-inside-text">Dalszy przykładowy tekst w temacie...</p>
              </div>
              <div className="topic-lower-panel">
                <ActionButton type="button">Odpowiedz</ActionButton>
                <div className="topic-author">
                  <img src={avatarIco} alt="ikona zdjęcia autora tematu" className="author-img" />
                  <p className="author-name">Wykładowca</p>
                </div>
              </div>
            </div>
          </div>
        </MainForumSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowTopic;

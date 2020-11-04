import React, { Fragment } from 'react';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror';
import { options, menu } from '@aeaton/react-prosemirror-config-default';

import { ActionButton } from '../../styled/Buttons';
import { ContentContainer } from '../../styled/Containers';
import { AddTopicSection, SectionTitle } from '../../styled/Sections';

import attachementIco from '../../../assets/images/attachement-ico.svg';
import removeIco from '../../../assets/images/remove-ico.svg';

const ShowTopicOptions = () => {
  return (
    <Fragment>
      <SectionTitle>Dodaj nowy temat</SectionTitle>
      <ContentContainer topic>
        <AddTopicSection>
          <div className="topic-category">
            <h3 className="topic-heading">Dział:</h3>
            <p className="topic-category-name">Programowanie aplikacji mobilnych</p>
          </div>
          <div className="topic-title">
            <h3 className="topic-heading">Tytuł:</h3>
            <input type="text" className="topic-title-input" placeholder="Przykładowy tytuł tematu..." />
          </div>
          <div className="topic-main-container">
            <HtmlEditor
              className="ww"
              options={options}
              value="Usuń ten tekst i zacznij pisać nowy temat!"
              render={({ editor, view }) => (
                <div className="editor">
                  <MenuBar menu={menu} view={view} />
                  {editor}
                </div>
              )}
            />
            <div className="topic-attachements">
              <h3 className="topic-heading">Załączniki:</h3>
              <div className="attachements-container">
                <div className="single-attachement">
                  <img src={attachementIco} alt="Ikona załącznika" className="topic-ico" />
                  <p className="attachement-name">Załącznik 1</p>
                  <button className="remove-attachement">
                    <img src={removeIco} alt="Ikona usunięcia" className="topic-ico" />
                  </button>
                </div>
                <div className="single-attachement">
                  <img src={attachementIco} alt="Ikona załącznika" className="topic-ico" />
                  <p className="attachement-name">Załącznik 2</p>
                  <button className="remove-attachement">
                    <img src={removeIco} alt="Ikona usunięcia" className="topic-ico" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="topic-buttons">
            <ActionButton className="topic-button">Dodaj temat</ActionButton>
            <ActionButton className="topic-button">Dodaj załącznik</ActionButton>
          </div>
        </AddTopicSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowTopicOptions;

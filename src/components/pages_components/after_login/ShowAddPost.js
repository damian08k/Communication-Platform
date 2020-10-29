import React, { Fragment } from 'react';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror';
import { options, menu } from '@aeaton/react-prosemirror-config-default';

import CategoriesPanel from './CategoriesPanel';
import PostTitlePanel from './PostTitlePanel';

import { ActionButton } from '../../styled/Buttons';
import { ContentContainer } from '../../styled/Containers';
import { AddPostSection, SectionTitle } from '../../styled/Sections';

const ShowAddPost = () => {
  return (
    <Fragment>
      <SectionTitle>Dodaj nowy wpis</SectionTitle>
      <ContentContainer>
        <AddPostSection>
          <CategoriesPanel />
          <PostTitlePanel />
          <HtmlEditor
            className="ww"
            options={options}
            value="Usuń ten tekst i zacznij pisać swój post!"
            render={({ editor, view }) => (
              <div className="editor">
                <MenuBar menu={menu} view={view} />
                {editor}
              </div>
            )}
          />
          <ActionButton type="button" className="add-post-button">
            Dodaj wpis
          </ActionButton>
        </AddPostSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowAddPost;

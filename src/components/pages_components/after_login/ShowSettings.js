import React, { Fragment } from 'react';

import SettingsLeftPanel from './SettingsLeftPanel';
import SettingsRightPanel from './SettingsRightPanel';

import { ActionButton } from '../../styled/Buttons';
import { ContentContainer } from '../../styled/Containers';
import { SectionTitle, SettingsSection } from '../../styled/Sections';

const ShowSettings = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  const changeButton = <ActionButton type="submit">Zmień</ActionButton>;

  return (
    <Fragment>
      <SectionTitle>Zmień swoje ustawienia</SectionTitle>
      <ContentContainer>
        <SettingsSection>
          <SettingsLeftPanel applyChanges={changeButton} handleFormSubmit={handleFormSubmit} />
          <SettingsRightPanel applyChanges={changeButton} handleFormSubmit={handleFormSubmit} />
        </SettingsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowSettings;

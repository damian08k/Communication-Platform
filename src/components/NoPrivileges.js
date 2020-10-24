import React from 'react';

import { ContentContainer } from './styled/Containers';
import { InfoText } from './styled/Sections';

const NoPrivileges = () => {
  return (
    <ContentContainer noPrivileges>
      <InfoText noPrivileges>Nie posiadasz uprawnień do przeglądania zawartości tej strony!</InfoText>
    </ContentContainer>
  );
};

export default NoPrivileges;

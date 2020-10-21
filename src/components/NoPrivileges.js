import React from 'react';

import { ContentContainer } from './styled/Containers';
import { InfoText } from './styled/Sections';

const NoPrivileges = () => {
  return (
    <ContentContainer noPrivileges>
      <InfoText noPrivileges>Nie posiadasz uprawnień do przeglądania zawartości tej strony! By móc ją przeglądać musisz się zalogować!</InfoText>
    </ContentContainer>
  );
};

export default NoPrivileges;

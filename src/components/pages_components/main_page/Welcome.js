import React from 'react';

import { ContentContainer } from '../../styled/Containers';
import { InfoText, SectionTitle, WelcomeSection } from '../../styled/Sections';

import facultyLogo from '../../../assets/images/WZ-logo.png';

const Welcome = () => {
  return (
    <ContentContainer>
      <WelcomeSection>
        <div className="welcome-img-container">
          <img src={facultyLogo} alt="logo wydziału zarządzania" className="welcome-img" />
        </div>
        <div className="welcome-txt-container">
          <SectionTitle className="welcome-title">Witaj na platformie komunikacyjnej Wydziału Zarządzania Politechniki Warszawskiej!</SectionTitle>
          <InfoText>
            Platforma ta, jest przeznaczona dla studentów oraz wykładowców Wydziału. Pełni ona rolę głównego źródła informacji, a także podstawowej
            aplikacji do pracy przez cały okres trwania studiów!
          </InfoText>
        </div>
      </WelcomeSection>
    </ContentContainer>
  );
};

export default Welcome;

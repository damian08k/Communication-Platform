import React from 'react';
import { Link } from 'react-router-dom';

import { ActionButton } from '../../styled/Buttons';
import { ContentContainer } from '../../styled/Containers';
import { InfoText, SectionTitle, SingupSection } from '../../styled/Sections';

const Signup = () => {
  return (
    <ContentContainer signup>
      <SingupSection>
        <SectionTitle>Aby móc w pełni korzystać z platformy, musisz posiadać konto!</SectionTitle>
        <InfoText>
          Jeśli posiadasz już konto, kliknij <Link to="/zaloguj">tutaj</Link> aby się zalogować.
        </InfoText>
        <InfoText>Jeżeli nie posiadasz jeszcze konta, kliknij w poniższy przycisk, by przejść do formularza rejestracji.</InfoText>
        <ActionButton type="button">Zarejestruj się</ActionButton>
      </SingupSection>
    </ContentContainer>
  );
};

export default Signup;

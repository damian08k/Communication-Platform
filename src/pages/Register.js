import React, { Fragment } from 'react';

import { ActionButton } from '../components/styled/Buttons';
import { ContentContainer } from '../components/styled/Containers';
import { RegisterSection, SectionTitle } from '../components/styled/Sections';

const Register = () => {
  const handleUserRegister = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <SectionTitle>Nie posiadasz jeszcze konta? Wypełnij poniższy formularz i stwórz je.</SectionTitle>
      <ContentContainer>
        <RegisterSection>
          <form onSubmit={handleUserRegister} className="register-form">
            <div className="register-input-container">
              <input type="text" id="album" placeholder="Wprowadź numer indeksu..." className="register-input" maxLength="6" required />
              <label htmlFor="album" className="register-label">
                Numer indeksu*:
              </label>
            </div>
            <div className="register-input-container">
              <input type="text" id="name" placeholder="Wprowadź swoje imię..." className="register-input" maxLength="255" required />
              <label htmlFor="name" className="register-label">
                Imię*:
              </label>
            </div>
            <div className="register-input-container">
              <input type="text" id="surname" placeholder="Wprowadź swoje nazwisko..." className="register-input" maxLength="255" required />
              <label htmlFor="surname" className="register-label">
                Nazwisko*:
              </label>
            </div>
            <div className="register-input-container">
              <input type="password" id="password" placeholder="Wprowadź hasło..." className="register-input" minLength="8" maxLength="10" required />
              <label htmlFor="password" className="register-label">
                Hasło*:
              </label>
            </div>
            <div className="register-input-container">
              <input
                type="password"
                id="repeat-password"
                placeholder="Wprowadź hasło..."
                className="register-input"
                minLength="8"
                maxLength="10"
                required
              />
              <label htmlFor="repeat-password" className="register-label">
                Powtórz hasło*:
              </label>
            </div>
            <div className="register-input-container">
              <input type="email" id="email" placeholder="Wprowadź adres email..." className="register-input" required />
              <label htmlFor="email" className="register-label">
                Email*:
              </label>
            </div>
            <ActionButton type="submit" className="register-button">
              Zarejestruj
            </ActionButton>
          </form>
        </RegisterSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Register;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ActionButton } from '../components/styled/Buttons';
import { ContentContainer } from '../components/styled/Containers';
import { InfoText, LoginSection, SectionTitle } from '../components/styled/Sections';

import logo from '../assets/images/WZ-logo.png';

const Login = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <SectionTitle>Posiadasz już konto? Zaloguj się.</SectionTitle>
      <ContentContainer>
        <LoginSection>
          <div className="img-container">
            <img src={logo} alt="Logo Wydziału Zarządzania" className="logo-img" />
          </div>
          <form className="login-form" onSubmit={handleFormSubmit}>
            <div className="login-container">
              <input type="text" placeholder="Wprowadź numer indeksu lub login..." id="login" className="login-input" />
              <label htmlFor="login" className="login-label">
                Login:
              </label>
            </div>
            <div className="login-container">
              <input type="password" placeholder="Wprowadź hasło..." id="password" className="login-input" />
              <label htmlFor="password" className="login-label">
                Hasło:
              </label>
            </div>
            <div className="login-container">
              <input type="checkbox" id="remember-login" className="checbox-input" />
              <label htmlFor="remember-login" className="checkbox-label">
                Zapamiętaj dane logowania
              </label>
            </div>
            <div className="login-container">
              <ActionButton type="submit" className="login-button">
                Zaloguj
              </ActionButton>
            </div>
          </form>
          <InfoText className="login-info-text">
            <span className="question-sign">?</span>
            <span>
              Jesteś nowym studentem? Zarejestruj się do platformy klikając w ten <Link to="/zarejestruj">odnośnik</Link>.
            </span>
          </InfoText>
        </LoginSection>
      </ContentContainer>
    </Fragment>
  );
};

export default Login;

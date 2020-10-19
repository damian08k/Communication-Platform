import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../AppProvider';
import { ActionButton } from '../components/styled/Buttons';
import { ContentContainer } from '../components/styled/Containers';
import { InfoText, LoginSection, SectionTitle } from '../components/styled/Sections';

import { users } from '../js/constants';

import logo from '../assets/images/WZ-logo.png';

const Login = () => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const { setIsLogged, setUserName, setUserType } = useContext(AppContext);

  const handleFormSubmit = e => {
    e.preventDefault();
    checkIsLogged();
  };

  const handleLoginChange = e => {
    setInputLogin(e.target.value);
  };

  const handlePasswordChange = e => {
    setInputPassword(e.target.value);
  };

  const checkIsLogged = () => {
    const isLogin = users.filter(({ login, password }) => inputLogin === login && inputPassword === password);
    if (isLogin.length > 0) {
      setIsLogged(true);
      setUserName(isLogin[0].login);
      setUserType(isLogin[0].type);
    } else {
      setIsLogged(false);
    }
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
              <input type="text" placeholder="Wprowadź numer indeksu lub login..." id="login" className="login-input" onChange={handleLoginChange} />
              <label htmlFor="login" className="login-label">
                Login:
              </label>
            </div>
            <div className="login-container">
              <input type="password" placeholder="Wprowadź hasło..." id="password" className="login-input" onChange={handlePasswordChange} />
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

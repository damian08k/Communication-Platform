import React, { useState, useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';

import { AppContext } from '../AppProvider';
import { HeaderContainer, HeaderElementsContainer, HeaderLoggedContainer, MenuContainer, NameContainer } from './styled/Containers';
import { Hamburger } from './styled/MenuElements';

import { PLATFORM_TITLE } from '../js/constants';

import avatarIco from '../assets/images/avatar-ico.svg';
import bellIco from '../assets/images/bell-ico.svg';
import logoutIco from '../assets/images/logout-ico.svg';
import logoImg from '../assets/images/WZ-logo.png';
import messagesIco from '../assets/images/messages-ico.svg';
import settingsIco from '../assets/images/settings-ico.svg';

const CHANGE_ELEMENTS_WIDTH = 1024;

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { windowWidth, isLogged, setIsLogged, userName, setUserName, userType, setUserType } = useContext(AppContext);

  const handleShowMenu = () => setIsClicked(prevValue => !prevValue);
  const handleLogoutOption = () => {
    setIsLogged(prevValue => !prevValue);
    setUserName('');
    setUserType('');
  };

  const webTitle = <span className="name-container-heading">{PLATFORM_TITLE}</span>;
  const headerLogo = (
    <button className="logo-button">
      <img src={logoImg} alt="logo wydziału zarządzania politechniki warszawskiej" className="name-container-img" />
    </button>
  );

  const desktopMenu = (
    <MenuContainer>
      <Menu />
    </MenuContainer>
  );

  const mobileMenu = (
    <MenuContainer isLogged={isLogged}>
      <Menu isClicked={isClicked} isLogged={isLogged} userType={userType} />
    </MenuContainer>
  );

  const isTextOrLogo = windowWidth >= CHANGE_ELEMENTS_WIDTH ? webTitle : headerLogo;
  const isDesktop =
    windowWidth >= CHANGE_ELEMENTS_WIDTH ? desktopMenu : <Hamburger onClick={handleShowMenu} isClicked={isClicked} isLogged={isLogged} />;
  const isMobile = windowWidth < CHANGE_ELEMENTS_WIDTH ? mobileMenu : null;

  const notLogged = (
    <HeaderContainer>
      <HeaderElementsContainer>
        <NameContainer>{isTextOrLogo}</NameContainer>
        {isDesktop}
      </HeaderElementsContainer>
      {isMobile}
    </HeaderContainer>
  );

  const showUserName =
    windowWidth > CHANGE_ELEMENTS_WIDTH ? (
      <HeaderLoggedContainer>
        <img src={avatarIco} alt="Ikona użytkownika" className="header-logged-img" style={{ marginLeft: '130px' }} />
        <p className="logged-welcome-user">
          Witaj <span className="logged-user-name">{userName}</span>
        </p>
      </HeaderLoggedContainer>
    ) : null;

  const logged = (
    <HeaderContainer>
      <HeaderElementsContainer isLogged>
        <Hamburger onClick={handleShowMenu} isClicked={isClicked} isLogged={isLogged} />
        {showUserName}
        <HeaderLoggedContainer>
          <NavLink to="/wiadomosci" className="header-logged-clicked-elements">
            <img src={messagesIco} alt="Ikona przejścia do wiadomości prywatnych" className="header-logged-img" />
          </NavLink>
          <NavLink to="/ustawienia" className="header-logged-clicked-elements">
            <img src={settingsIco} alt="Ikona przejścia do ustawień konta" className="header-logged-img" />
          </NavLink>
          <NavLink to="/" className="header-logged-clicked-elements">
            <img src={bellIco} alt="Ikona powiadomień" className="header-logged-img" />
          </NavLink>
          <NavLink to="/" className="header-logged-clicked-elements logout-button" onClick={handleLogoutOption}>
            <img src={logoutIco} alt="Ikona wylogowania się" className="header-logged-img" />
          </NavLink>
        </HeaderLoggedContainer>
      </HeaderElementsContainer>
      {mobileMenu}
    </HeaderContainer>
  );

  return <Fragment>{isLogged ? logged : notLogged}</Fragment>;
};

export default Header;

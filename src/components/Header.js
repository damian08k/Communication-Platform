import React, { useState, useContext } from 'react';

import Menu from './Menu';

import { AppContext } from '../AppProvider';
import { HeaderContainer, HeaderElementsContainer, MenuContainer, NameContainer } from './styled/Containers';
import { Hamburger } from './styled/MenuElements';

import { PLATFORM_TITLE } from '../js/constants';

import logoImg from '../assets/images/WZ-logo.png';

const CHANGE_ELEMENTS_WIDTH = 1024;

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { windowWidth } = useContext(AppContext);

  const handleShowMenu = () => setIsClicked(prevValue => !prevValue);

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
    <MenuContainer>
      <Menu isClicked={isClicked} />
    </MenuContainer>
  );

  const isTextOrLogo = windowWidth >= CHANGE_ELEMENTS_WIDTH ? webTitle : headerLogo;
  const isDesktop = windowWidth >= CHANGE_ELEMENTS_WIDTH ? desktopMenu : <Hamburger onClick={handleShowMenu} isClicked={isClicked} />;
  const isMobile = windowWidth < CHANGE_ELEMENTS_WIDTH ? mobileMenu : null;

  return (
    <HeaderContainer>
      <HeaderElementsContainer>
        <NameContainer>{isTextOrLogo}</NameContainer>
        {isDesktop}
      </HeaderElementsContainer>
      {isMobile}
    </HeaderContainer>
  );
};

export default Header;

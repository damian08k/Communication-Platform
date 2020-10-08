import React, { useEffect, useState } from 'react';

import Menu from './Menu';

import { HeaderContainer, HeaderElementsContainer, MenuContainer, NameContainer } from './styled/Containers';
import { Hamburger } from './styled/MenuElements';

import { PLATFORM_TITLE } from '../js/constants';

import logoImg from '../assets/images/WZ-logo.png';

const FIRST_WINDOW_WIDTH = window.innerWidth;
const CHANGE_ELEMENTS_WIDTH = 1024;

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(FIRST_WINDOW_WIDTH);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

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

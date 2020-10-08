import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  margin,
  padding,
  breakpoints: { mobileXMedium, mobileLarge },
  colors: { black, white },
  headings: { h1, h2 },
} = defaultStylesValues;

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  background-color: ${white};
  border-bottom: 3px solid ${black};
`;

export const HeaderElementsContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  color: ${black};
`;

export const NameContainer = styled.h1`
  margin: ${margin}px;

  .logo-button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .name-container-heading {
    font-size: ${h1}rem;
  }

  .name-container-img {
    height: 5rem;
  }
`;

export const MenuContainer = styled.nav`
  height: 0;

  @media ${mobileLarge} {
    height: 100%;
    width: 40%;
    margin-left: auto;
  }
`;

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  padding: ${padding}px 0;
  background-color: ${white};
  border-top: 3px solid ${black};

  .footer-ask {
    flex-basis: 100%;
    font-size: ${h2}rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${margin * 2}px auto ${margin + 5}px;
  flex-basis: 100%;

  @media ${mobileXMedium} {
    flex-basis: 40%;
  }
`;

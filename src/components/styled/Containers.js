import styled, { css } from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  margin,
  padding,
  breakpoints: { mobileXMedium, mobileLarge },
  colors: { black, white },
  headings: { h1, h2 },
} = defaultStylesValues;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: ${white};
  border-bottom: 3px solid ${black};
`;

export const HeaderElementsContainer = styled.div`
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
  width: 100%;
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

export const MainContentContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  max-width: 80%;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  margin: ${margin}px ${margin}px ${margin * 2}px;
  padding: ${padding}px;
  height: fit-content;
  box-shadow: 5px 5px 4px 0 gray;
  border-radius: 20px;
  background-color: white;

  ${props =>
    props.signup &&
    css`
      flex-grow: 0;
      @media ${mobileXMedium} {
        flex-basis: 40%;
      }

      @media ${mobileLarge} {
        flex-basis: 50%;
      }
    `}

  ${props =>
    props.faculty &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      flex-grow: 1;

      .faculty-option-name {
        font-size: 3rem;
        text-align: center;
        color: ${black};
      }
    `}

    ${props =>
    props.authorities &&
    css`
      width: 480px;
    `}
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .faculty-menu-options {
    width: 300px;
    text-decoration: none;

    @media ${mobileXMedium} {
      width: 30%;
    }
  }
`;

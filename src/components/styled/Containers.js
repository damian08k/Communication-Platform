import styled, { css } from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileSmall, mobileXMedium, mobileLarge },
  colors: { black, white },
  headings: { h1, h2, h3 },
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

  ${props =>
    props.isLogged &&
    css`
      justify-content: space-between;
    `}
`;

export const HeaderLoggedContainer = styled.div`
  display: flex;
  align-items: center;

  .header-logged-img {
    width: 30px;
    height: 30px;
  }

  .logged-welcome-user {
    padding-left: ${padding}px;
    font-size: ${fontSize}rem;

    .logged-user-name {
      font-weight: bold;
    }
  }

  .header-logged-clicked-elements {
    margin: 0 ${margin}px;
  }

  .logout-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
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

  ${props =>
    props.isLogged &&
    css`
      @media ${mobileLarge} {
        height: 0;
        width: auto;
        margin-left: 0;
      }
    `}
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

    ${props =>
    props.courses &&
    css`
      .courses-info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 300px;

        .courses-info-heading {
          font-size: ${h3}rem;
        }

        .courses-info-text {
          text-align: left;
        }

        .courses-info-webpage {
          padding: ${padding}px 0;
          font-size: ${fontSize}rem;
        }

        @media ${mobileXMedium} {
          width: 400px;
        }
      }
    `}

    ${props =>
    props.noPrivileges &&
    css`
      align-self: center;
    `}

    ${props =>
    props.error &&
    css`
      align-self: center;

      .error {
        font-size: ${fontSize}rem;
        font-weight: bold;
        color: red;
      }
    `}
    
    ${props =>
    props.calendar &&
    css`
      .react-calendar {
        width: auto;

        @media ${mobileSmall} {
          width: 350px;
        }
      }
    `}

    ${props =>
    props.topic &&
    css`
      width: 100%;
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

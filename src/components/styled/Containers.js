import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  margin,
  breakpoints: { mobileLarge },
  colors: { black, white },
  headings: { h1 },
} = defaultStylesValues;

export const MainContainer = styled.div`
  width: 100%;
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

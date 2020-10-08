import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileXMedium, mobileLarge },
  headings: { h2 },
} = defaultStylesValues;

export const SectionTitle = styled.h2`
  width: 100%;
  margin ${margin * 2}px 0;
  font-size: ${h2}rem;
  text-align: center;
`;

export const InfoText = styled.p`
  padding: ${padding}px 0;
  font-size: ${fontSize}rem;
  text-align: center;
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .welcome-img-container {
    display: none;
    flex-basis: 20%;

    .welcome-img {
      height: 5rem;

      @media ${mobileLarge} {
        height: 7rem;
      }
    }
  }

  .welcome-txt-container {
    flex-basis: 100%;

    .welcome-title {
      margin-bottom: ${margin}px;
    }
  }

  @media ${mobileXMedium} {
    justify-content: space-around;

    .welcome-img-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .welcome-txt-container {
      flex-basis: 70%;
    }
  }
`;

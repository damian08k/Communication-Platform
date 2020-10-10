import styled from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileXMedium, mobileLarge },
  headings: { h2, h3 },
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

export const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .news-section-article {
    flex-wrap: wrap;
    margin: ${margin * 2}px 0;
  }

  .news-section-news-title {
    flex-basis: 100%;
    text-align: center;
    font-size: ${h3}rem;
  }

  .news-section-images {
    width: 100%;
    max-width: 300px;
    margin: ${margin}px 0;
  }

  .news-section-short-desc {
    flex-basis: 100%;
    text-align: center;
    font-size: ${fontSize}rem;

    .news-section-anchor {
      padding-left: ${padding / 3}px;
    }
  }

  @media ${mobileXMedium} {
    .news-section-news-title {
      text-align: left;
    }

    .news-section-short-desc {
      text-align: left;
    }
  }
`;

export const SingupSection = styled.section`
  text-align: center;
  align-self: center;
`;

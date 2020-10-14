import styled, { css } from 'styled-components';

import { defaultStylesValues } from '../../js/constants';

const {
  fontSize,
  margin,
  padding,
  breakpoints: { mobileSmall, mobileXMedium, mobileLarge },
  colors: { black, white },
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

  ${props =>
    props.practices &&
    css`
      font-weight: bold;
    `}
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

export const HelpSection = styled.section`
  .mobile-help-list {
    list-style-type: none;

    .mobile-help-list-element {
      border-bottom: 2px solid ${black};

      &:first-child {
        border-top: 2px solid ${black};
      }
      &:last-child {
        border-bottom: none;
      }

      .mobile-help-list-category {
        padding-top: ${padding}px;
        font-size: ${h3}rem;
        text-align: center;
      }

      .mobile-help-list-answer {
        padding: ${padding}px 0;
        font-size: ${fontSize}rem;
      }
    }
  }

  .desktop-help-table {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    border: 1px solid ${black};
    border-collapse: collapse;

    .help-heading,
    .help-row,
    .help-cell {
      border: 1px solid ${black};
    }

    .help-heading {
      background-color: #e0e7f1;
    }

    .help-heading,
    .help-cell {
      padding: ${padding}px;
      font-size: ${fontSize}rem;
    }

    .help-cell:first-child {
      text-align: center;
    }
  }
`;

export const AuthoritiesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .authority-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #c9c7c7;

    .authority-img-temporary-text {
      font-size: ${fontSize}rem;
      text-align: center;
    }
  }

  .authority-role,
  .authority-info {
    padding: ${padding / 4}px 0;
    text-align: center;
  }

  .authority-role {
    font-size: ${h3}rem;
  }

  .authority-info {
    font-size: 1.5rem;
  }

  @media ${mobileSmall} {
    flex-direction: row;
    justify-content: flex-start;

    .authority-role,
    .authority-info {
      padding-left: ${padding}px;
      text-align: left;
    }
  }
`;

export const DeanerySection = styled.section`
  min-height: 600px;

  .one-office-info-container {
    margin: ${margin}px 0;

    .office-name {
      font-size: ${h3}rem;
    }

    .office-info {
      font-size: 1.5rem;
      font-weight: bold;
      white-space: pre-line;

      .office-info-value {
        padding-left: ${padding / 2}px;
        font-weight: normal;

        .office-days {
          display: block;
          padding: ${padding / 2}px 0;
        }
      }

      .office-special-info {
        display: block;
        margin-top: ${margin}px;
        max-width: 450px;
      }
    }
  }
`;

export const PlansSection = styled.section`
  text-align: center;

  .plan {
    padding: ${padding}px 0;
  }

  .major-name {
    padding-bottom: ${padding / 2}px;
    font-size: ${h3}rem;
  }

  .studies-type-button {
    display: block;
    margin: ${margin}px 0;
    padding: ${padding}px ${padding * 2}px;
    border: 2px solid ${black};
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${black};

    transition: 0.3s background-color linear, 0.3s color linear;
    cursor: pointer;

    &:hover {
      background-color: ${black};
      color: ${white};
    }
  }
`;

export const PracticesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .practices-box {
    display: flex;
    flex-direction: column;
    min-height: 250px;

    .practices-box-heading {
      padding: ${padding}px 0;
      font-size: ${h3}rem;
      text-align: center;
    }

    .document-file,
    .practices-offer {
      padding: ${padding / 1.2}px 0;
      font-size: ${fontSize}rem;
    }

    @media ${mobileXMedium} {
      width: 500px;
    }
  }
`;

import React from 'react';

import { ContentContainer } from '../../styled/Containers';
import { NewsSection, SectionTitle } from '../../styled/Sections';

import newsImg from '../../../assets/images/news-image.jpg';

const News = () => {
  return (
    <ContentContainer>
      <NewsSection>
        <SectionTitle>Najnowsze aktualności</SectionTitle>
        <article className="news-section-article">
          <h3 className="news-section-news-title">Tytuł aktualności</h3>
          <img src={newsImg} alt="obraz aktualności" className="news-section-images" />
          <p className="news-section-short-desc">
            Krótki opis...
            <a href="#" className="news-section-anchor">
              czytaj dalej
            </a>
          </p>
        </article>
        <article className="news-section-article">
          <h3 className="news-section-news-title">Tytuł aktualności</h3>
          <img src={newsImg} alt="obraz aktualności" className="news-section-images" />
          <p className="news-section-short-desc">
            Krótki opis...
            <a href="#" className="news-section-anchor">
              czytaj dalej
            </a>
          </p>
        </article>
      </NewsSection>
    </ContentContainer>
  );
};

export default News;

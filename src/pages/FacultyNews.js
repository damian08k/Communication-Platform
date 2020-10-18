import React, { Fragment, useState } from 'react';

import { ContentContainer } from '../components/styled/Containers';
import { NewsSection, SectionTitle } from '../components/styled/Sections';

import newsImg from '../assets/images/news-image.jpg';

const news = [
  {
    id: '1',
    newsTitle: 'Tytuł1',
    shortDesc: 'Krótki opis1...',
    linkHref: '#!',
  },
  {
    id: '2',
    newsTitle: 'Tytuł2',
    shortDesc: 'Krótki opis2...',
    linkHref: '#!',
  },
  {
    id: '3',
    newsTitle: 'Tytuł3',
    shortDesc: 'Krótki opis3...',
    linkHref: '#!',
  },
  {
    id: '4',
    newsTitle: 'Tytuł4',
    shortDesc: 'Krótki opis4...',
    linkHref: '#!',
  },
  {
    id: '5',
    newsTitle: 'Tytuł5',
    shortDesc: 'Krótki opis5...',
    linkHref: '#!',
  },
  {
    id: '6',
    newsTitle: 'Tytuł6',
    shortDesc: 'Krótki opis6...',
    linkHref: '#!',
  },
  {
    id: '7',
    newsTitle: 'Tytuł7',
    shortDesc: 'Krótki opis7...',
    linkHref: '#!',
  },
  {
    id: '8',
    newsTitle: 'Tytuł8',
    shortDesc: 'Krótki opis8...',
    linkHref: '#!',
  },
  {
    id: '9',
    newsTitle: 'Tytuł9',
    shortDesc: 'Krótki opis9...',
    linkHref: '#!',
  },
];

const newsPerPage = 3;

const FacultyNews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);

  const showNews = currentNews.map(post => (
    <article key={post.id} className="news-section-article">
      <h3 className="news-section-news-title">{post.newsTitle}</h3>
      <img src={newsImg} alt="obraz aktualności" className="news-section-images" />
      <p className="news-section-short-desc">
        {post.shortDesc}
        <a href={post.linkHref} className="news-section-anchor">
          czytaj dalej
        </a>
      </p>
    </article>
  ));

  const pageNumbers = [];
  for (let page = 1; page <= Math.ceil(news.length / newsPerPage); page++) {
    pageNumbers.push(page);
  }

  const handleChangePage = e => {
    setCurrentPage(Number(e.target.id));
  };

  const showPageNumbers = pageNumbers.map(number => (
    <li key={number} id={number} onClick={handleChangePage} className="page-number">
      {number}
    </li>
  ));

  return (
    <Fragment>
      <SectionTitle>Najnowsze aktualności</SectionTitle>
      <ContentContainer>
        <NewsSection faculty>
          {showNews}
          <ul className="page-list">{showPageNumbers}</ul>
        </NewsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default FacultyNews;

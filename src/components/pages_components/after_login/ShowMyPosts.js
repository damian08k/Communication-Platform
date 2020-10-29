import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SinglePost from './SinglePost';

import { ContentContainer } from '../../styled/Containers';
import { MyPostsSection, SectionTitle } from '../../styled/Sections';

const myPosts = [
  {
    id: '1',
    postTitle: 'Nowy Dziekan Wydziału!',
    postCategory: 'Aktualności',
  },
  {
    id: '2',
    postTitle: 'Oferta praktyk firmy X',
    postCategory: 'Praktyki i staże',
  },
  {
    id: '3',
    postTitle: 'Szkolenie z programu Y',
    postCategory: 'Kursy',
  },
];

const ShowMyPosts = () => {
  const showMyPosts = myPosts.map(({ id, postTitle, postCategory }) => (
    <SinglePost key={id} id={id} postTitle={postTitle} postCategory={postCategory} />
  ));

  return (
    <Fragment>
      <SectionTitle>Sprawdź swoje wpisy</SectionTitle>
      <ContentContainer>
        <MyPostsSection>
          <div className="post-headings-panel">
            <p className="post-title">Tytuł wpisu</p>
            <p className="post-category">Kategoria</p>
          </div>
          {showMyPosts}
          <Link to="/dodaj-wpis" className="add-post-button">
            Dodaj nowy wpis
          </Link>
        </MyPostsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowMyPosts;

import React, { Fragment } from 'react';

import { ContentContainer } from '../components/styled/Containers';
import { InfoText, SectionTitle } from '../components/styled/Sections';

const courses = [
  { id: '1', courseName: 'Kurs1', courseInfo: 'Informacja dot. kursu1', courseLink: '!#' },
  { id: '2', courseName: 'Kurs2', courseInfo: 'Informacja dot. kursu2', courseLink: '!#' },
  { id: '3', courseName: 'Kurs3', courseInfo: 'Informacja dot. kursu3', courseLink: '!#' },
  { id: '4', courseName: 'Kurs4', courseInfo: 'Informacja dot. kursu4', courseLink: '!#' },
  { id: '5', courseName: 'Kurs5', courseInfo: 'Informacja dot. kursu5', courseLink: '!#' },
  { id: '6', courseName: 'Kurs6', courseInfo: 'Informacja dot. kursu6', courseLink: '!#' },
];

const Courses = () => {
  const availableCourses = courses.map(course => (
    <ContentContainer key={course.id} courses>
      <div className="courses-info-container">
        <h3 className="courses-info-heading">{course.courseName}</h3>
        <InfoText className="courses-info-text">{course.courseInfo}</InfoText>
        <a href={course.courseLink} rel="noopener noreferrer" target="_blank" className="courses-info-webpage">
          Strona internetowa kursu
        </a>
      </div>
    </ContentContainer>
  ));

  return (
    <Fragment>
      <SectionTitle>Informacje dotyczące kursów dla studentów</SectionTitle>
      {availableCourses}
    </Fragment>
  );
};

export default Courses;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ContentContainer } from '../../styled/Containers';
import { MyCoursesSection, SectionTitle } from '../../styled/Sections';

const myCourses = [
  {
    id: '1',
    courseName: 'Przedmiot1',
  },
  {
    id: '2',
    courseName: 'Przedmiot2',
  },
  {
    id: '3',
    courseName: 'Przedmiot3',
  },
  {
    id: '4',
    courseName: 'Przedmiot4',
  },
  {
    id: '5',
    courseName: 'Przedmiot5',
  },
  {
    id: '6',
    courseName: 'Przedmiot6',
  },
];

const ShowCourses = () => {
  const showMyCoursesContent = myCourses.map(({ id, courseName }) => (
    <div className="my-courses-course-container" key={id}>
      <Link to="/" className="my-course-single-course">
        {courseName}
      </Link>
    </div>
  ));

  return (
    <Fragment>
      <SectionTitle>Moje przedmioty</SectionTitle>
      <ContentContainer>
        <MyCoursesSection>{showMyCoursesContent}</MyCoursesSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowCourses;

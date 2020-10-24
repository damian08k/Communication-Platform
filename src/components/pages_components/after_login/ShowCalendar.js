import React, { Fragment, useState } from 'react';
import Calendar from 'react-calendar';

import { ContentContainer } from '../../styled/Containers';
import { SectionTitle } from '../../styled/Sections';

import 'react-calendar/dist/Calendar.css';

const ShowCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Fragment>
      <SectionTitle>Kalendarz</SectionTitle>
      <ContentContainer calendar>
        <Calendar onChange={onChange} value={value} />
      </ContentContainer>
    </Fragment>
  );
};

export default ShowCalendar;

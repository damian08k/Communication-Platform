import React, { Fragment } from 'react';

import { ContentContainer } from '../components/styled/Containers';

const Error404 = () => {
  return (
    <Fragment>
      <ContentContainer error>
        <p className="error">Error 404! Taka strona nie istnieje!</p>
      </ContentContainer>
    </Fragment>
  );
};

export default Error404;

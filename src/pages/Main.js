import React from 'react';

import News from '../components/pages_components/main_page/News';
import Welcome from '../components/pages_components/main_page/Welcome';

import { FlexContainer } from '../components/styled/Containers';

const Main = () => {
  return (
    <FlexContainer>
      <Welcome />
      <News />
    </FlexContainer>
  );
};

export default Main;

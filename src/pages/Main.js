import React from 'react';

import News from '../components/pages_components/main_page/News';
import Signup from '../components/pages_components/main_page/Signup';
import Welcome from '../components/pages_components/main_page/Welcome';

import { FlexContainer } from '../components/styled/Containers';

const Main = () => {
  return (
    <FlexContainer>
      <Welcome />
      <News />
      <Signup />
    </FlexContainer>
  );
};

export default Main;

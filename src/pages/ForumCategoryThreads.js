import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowCategoriesTopics from '../components/pages_components/after_login/ShowCategoriesTopics';

import { AppContext } from '../AppProvider';

const ForumCategoryThreads = () => {
  const { isLogged } = useContext(AppContext);

  return isLogged ? <ShowCategoriesTopics /> : <NoPrivileges />;
};

export default ForumCategoryThreads;

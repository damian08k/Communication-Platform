import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowForum from '../components/pages_components/after_login/ShowForum';

import { AppContext } from '../AppProvider';

const Forum = () => {
  const { isLogged } = useContext(AppContext);

  return isLogged ? <ShowForum /> : <NoPrivileges />;
};

export default Forum;

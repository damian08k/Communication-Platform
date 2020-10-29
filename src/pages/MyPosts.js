import React, { useContext } from 'react';

import { AppContext } from '../AppProvider';

import NoPrivileges from '../components/NoPrivileges';
import ShowMyPosts from '../components/pages_components/after_login/ShowMyPosts';

import { admWorkerType } from '../js/constants';

const MyPosts = () => {
  const { isLogged, userType } = useContext(AppContext);

  return isLogged && userType === admWorkerType ? <ShowMyPosts /> : <NoPrivileges />;
};

export default MyPosts;

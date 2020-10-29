import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowAddPost from '../components/pages_components/after_login/ShowAddPost';

import { AppContext } from '../AppProvider';

import { admWorkerType } from '../js/constants';

const AddPost = () => {
  const { isLogged, userType } = useContext(AppContext);

  return isLogged && userType === admWorkerType ? <ShowAddPost /> : <NoPrivileges />;
};

export default AddPost;

import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowTopic from '../components/pages_components/after_login/ShowTopic';

import { AppContext } from '../AppProvider';

const InsideTopic = () => {
  const { isLogged } = useContext(AppContext);

  return isLogged ? <ShowTopic /> : <NoPrivileges />;
};

export default InsideTopic;

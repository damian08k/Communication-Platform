import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowTopicOptions from '../components/pages_components/after_login/ShowTopicOptions';

import { AppContext } from '../AppProvider';

const AddTopic = () => {
  const { isLogged } = useContext(AppContext);

  return isLogged ? <ShowTopicOptions /> : <NoPrivileges />;
};

export default AddTopic;

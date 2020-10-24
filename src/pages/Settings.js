import React, { Fragment, useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowSettings from '../components/pages_components/after_login/ShowSettings';

import { AppContext } from '../AppProvider';

const Messages = () => {
  const { isLogged } = useContext(AppContext);

  const showPageContent = isLogged ? <ShowSettings /> : <NoPrivileges />;

  return <Fragment>{showPageContent}</Fragment>;
};

export default Messages;

import React, { Fragment, useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowMessages from '../components/pages_components/after_login/ShowMessages';

import { AppContext } from '../AppProvider';

const Messages = () => {
  const { isLogged, windowWidth } = useContext(AppContext);

  const showPageContent = isLogged ? <ShowMessages windowWidth={windowWidth} /> : <NoPrivileges />;

  return <Fragment>{showPageContent}</Fragment>;
};

export default Messages;

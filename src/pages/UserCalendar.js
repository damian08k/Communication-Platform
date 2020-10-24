import React, { useContext } from 'react';

import { AppContext } from '../AppProvider';

import NoPrivileges from '../components/NoPrivileges';
import ShowCalendar from '../components/pages_components/after_login/ShowCalendar';

import { studentType } from '../js/constants';

const UserCalendar = () => {
  const { isLogged, userType } = useContext(AppContext);

  return isLogged && userType === studentType ? <ShowCalendar /> : <NoPrivileges />;
};

export default UserCalendar;

import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowCourses from '../components/pages_components/after_login/ShowCourses';

import { AppContext } from '../AppProvider';

import { lecturerType, studentType } from '../js/constants';

const MyCourses = () => {
  const { isLogged, userType } = useContext(AppContext);

  return isLogged && (userType === lecturerType || userType === studentType) ? <ShowCourses /> : <NoPrivileges />;
};

export default MyCourses;

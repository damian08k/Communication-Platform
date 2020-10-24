import React, { useContext } from 'react';

import NoPrivileges from '../components/NoPrivileges';
import ShowMaterials from '../components/pages_components/after_login/ShowMaterials';

import { AppContext } from '../AppProvider';

import { lecturerType } from '../js/constants';

const AddMaterials = () => {
  const { isLogged, userType } = useContext(AppContext);

  return isLogged && userType === lecturerType ? <ShowMaterials /> : <NoPrivileges />;
};

export default AddMaterials;

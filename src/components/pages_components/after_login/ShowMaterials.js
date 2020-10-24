import React, { Fragment } from 'react';

import MaterialsCoursesPanel from './MaterialsCoursesPanel';
import MaterialsPanel from './MaterialsPanel';

import { ContentContainer } from '../../styled/Containers';
import { AddMaterialsSection, SectionTitle } from '../../styled/Sections';

import addIco from '../../../assets/images/add-ico.svg';
import attachementIco from '../../../assets/images/attachement-ico.svg';
import removeIco from '../../../assets/images/remove-ico.svg';

const ShowMaterials = () => {
  return (
    <Fragment>
      <SectionTitle>Dodaj materiały</SectionTitle>
      <ContentContainer>
        <AddMaterialsSection>
          <MaterialsCoursesPanel />
          <MaterialsPanel addIco={addIco} attachementIco={attachementIco} removeIco={removeIco} />
        </AddMaterialsSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowMaterials;

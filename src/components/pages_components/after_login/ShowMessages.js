import React, { Fragment, useState } from 'react';

import MessagesLeftPanel from './MessagesLeftPanel';
import MessagesRightPanel from './MessagesRightPanel';

import { ContentContainer } from '../../styled/Containers';
import { MessagesSection, SectionTitle } from '../../styled/Sections';

import avatarIcon from '../../../assets/images/avatar-ico.svg';

const CHANGE_WINDOW_WIDTH = 800;

const ShowMessages = ({ windowWidth }) => {
  const [isShowMessage, setIsShowMessage] = useState(false);

  const handleShowMessage = () => {
    if (windowWidth < CHANGE_WINDOW_WIDTH) {
      setIsShowMessage(prevValue => !prevValue);
    }
  };

  const avatarIconImgElement = <img src={avatarIcon} alt="ikonka zdjęcia użytkownika" className="panel-title-ico" />;

  return (
    <Fragment>
      <SectionTitle>Wiadomości prywatne</SectionTitle>
      <ContentContainer>
        <MessagesSection isShowMessage={isShowMessage}>
          <MessagesLeftPanel handleShowMessage={handleShowMessage} avatarIconImgElement={avatarIconImgElement} />
          <MessagesRightPanel handleShowMessage={handleShowMessage} avatarIconImgElement={avatarIconImgElement} />
        </MessagesSection>
      </ContentContainer>
    </Fragment>
  );
};

export default ShowMessages;

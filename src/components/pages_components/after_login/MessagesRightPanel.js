import React from 'react';

import { ActionButton } from '../../styled/Buttons';

const MessagesRightPanel = ({ handleShowMessage, avatarIconImgElement }) => {
  return (
    <div className="messages-right-panel">
      <div className="panel-heading">
        <h3 className="panel-title">
          <div className="close-message" onClick={handleShowMessage}>
            X
          </div>
          {avatarIconImgElement}
          <span className="panel-title-user-name">Student</span>
        </h3>
        <ActionButton type="button" style={{ marginRight: '5px' }}>
          Wyślij wiadomość
        </ActionButton>
      </div>
      <div className="messages">
        <div className="one-message" data-message="1">
          <div className="message">
            <div className="message-left-panel">
              {avatarIconImgElement}
              <p className="user-message-user-name">Student</p>
            </div>
            <div className="message-right-panel">
              <p className="user-message">Tekst przykładowej wiadomości...</p>
              <p className="message-author">Student</p>
            </div>
          </div>
          <div className="message">
            <div className="message-left-panel">
              {avatarIconImgElement}
              <p className="user-message-user-name">Wykładowca</p>
            </div>
            <div className="message-right-panel">
              <p className="user-message">Tekst przykładowej wiadomości...</p>
              <p className="message-author">Wykładowca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesRightPanel;

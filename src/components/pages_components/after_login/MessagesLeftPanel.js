import React from 'react';

const MessagesLeftPanel = ({ handleShowMessage, avatarIconImgElement }) => {
  return (
    <div className="messages-left-panel">
      <div className="panel-heading" style={{ justifyContent: 'center' }}>
        <h3 className="panel-title">Rozmowy</h3>
      </div>
      <div className="panel-last-messages">
        <div className="user-last-messages" onClick={handleShowMessage} data-message="1">
          {avatarIconImgElement}
          <div className="user-message-info">
            <p className="user-message-user-name">Student</p>
            <p className="user-message-last-message">Ostatnio napisana wiadomość</p>
          </div>
        </div>
        <div className="user-last-messages" onClick={handleShowMessage} data-message="2">
          {avatarIconImgElement}
          <div className="user-message-info">
            <p className="user-message-user-name">Wykładowca</p>
            <p className="user-message-last-message">Ostatnio napisana wiadomość</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesLeftPanel;

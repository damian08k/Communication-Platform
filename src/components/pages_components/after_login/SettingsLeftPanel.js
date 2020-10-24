import React from 'react';

const SettingsLeftPanel = ({ applyChanges, handleFormSubmit }) => {
  return (
    <div className="settings-left-panel">
      <h3 className="settings-panel-heading">Zmiana hasła</h3>
      <form className="settings-change-form" onSubmit={handleFormSubmit}>
        <div className="input-change-container">
          <label htmlFor="new-password" className="settings-input-label">
            Nowe Hasło*:
          </label>
          <input type="password" id="new-password" className="settings-input" placeholder="Wprowadź hasło..." required />
        </div>
        <div className="input-change-container">
          <label htmlFor="repeat-new-password" className="settings-input-label">
            Powtórz hasło*:
          </label>
          <input type="password" id="repeat-new-password" className="settings-input" placeholder="Wprowadź hasło..." required />
        </div>
        {applyChanges}
      </form>
    </div>
  );
};

export default SettingsLeftPanel;

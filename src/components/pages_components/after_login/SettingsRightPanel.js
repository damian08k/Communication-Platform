import React from 'react';

const settings = [
  {
    id: '1',
    sName: 'Ustawienie nr 1',
  },
  {
    id: '2',
    sName: 'Ustawienie nr 2',
  },
  {
    id: '3',
    sName: 'Ustawienie nr 3',
  },
  {
    id: '4',
    sName: 'Ustawienie nr 4',
  },
];

const SettingsRightPanel = ({ applyChanges, handleFormSubmit }) => {
  const settingsOptions = settings.map(({ id, sName }) => (
    <div className="input-change-container" key={id}>
      <label htmlFor={`setting-no-${id}`} className="settings-input-label">
        {sName}
      </label>
      <input type="checkbox" id={`setting-no-${id}`} className="settings-input" />
    </div>
  ));

  return (
    <div className="settings-right-panel">
      <h3 className="settings-panel-heading">Ustawienia ogólne</h3>
      <form className="settings-change-form" onSubmit={handleFormSubmit}>
        {settingsOptions}
        {applyChanges}
      </form>
    </div>
  );
};

export default SettingsRightPanel;

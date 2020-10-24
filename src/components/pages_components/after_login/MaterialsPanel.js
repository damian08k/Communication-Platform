import React from 'react';

const MaterialsPanel = ({ addIco, attachementIco, removeIco }) => {
  return (
    <div className="add-materials-content-container">
      <h3 className="add-materials-heading">Lista dodanych materiałów:</h3>
      <div className="added-materials">
        <div className="material">
          <img src={attachementIco} alt="ikona dodanego materiału" className="added-material-icon" />
          <p className="material-name">Dokument 1</p>
          <button className="remove-material-button" type="button">
            <img src={removeIco} alt="ikona usunięcia materiału" className="added-material-icon" />
          </button>
        </div>
        <div className="material">
          <img src={attachementIco} alt="ikona dodanego materiału" className="added-material-icon" />
          <p className="material-name">Prezentacja 1</p>
          <button className="remove-material-button" type="button">
            <img src={removeIco} alt="ikona usunięcia materiału" className="added-material-icon" />
          </button>
        </div>
        <div className="material">
          <button type="button" className="add-material-button">
            <img src={addIco} alt="ikona dodania materiału" className="added-material-icon" />
          </button>
          <p className="material-name-add-material">Dodaj nowe materiały</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialsPanel;

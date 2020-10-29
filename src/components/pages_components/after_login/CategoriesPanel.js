import React from 'react';

const CategoriesPanel = () => {
  return (
    <div className="categories-content-container">
      <h3 className="categories-heading">Kategoria:</h3>
      <select className="categories-list">
        <option value="Praktyki i staże">Praktyki i staże</option>
        <option value="Kursy">Kursy</option>
        <option value="Aktualności">Aktualności</option>
      </select>
    </div>
  );
};

export default CategoriesPanel;

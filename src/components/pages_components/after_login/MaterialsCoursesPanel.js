import React from 'react';

const MaterialsCoursesPanel = () => {
  return (
    <div className="add-materials-content-container">
      <h3 className="add-materials-heading">Przedmiot:</h3>
      <select className="courses-list">
        <option value="Zarządzanie projektami IT">Zarządzanie projektami IT</option>
        <option value="Zarządzanie projektami">Zarządzanie projektami</option>
        <option value="Planowanie w projektowaniu IT">Planowanie w projektowaniu IT</option>
        <option value="Aspekty prawne w projektach">Aspekty prawne w projektach</option>
      </select>
    </div>
  );
};

export default MaterialsCoursesPanel;

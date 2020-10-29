import React from 'react';

import editPostIco from '../../../assets/images/edit-article-ico.svg';
import removeIco from '../../../assets/images/remove-ico.svg';

const SinglePostRightPanel = () => {
  return (
    <div className="single-post-right-panel">
      <button type="button" className="single-post-right-panel-button" title="Edytuj wpis">
        <img src={editPostIco} alt="Ikona edycji postu" className="post-button-ico" />
      </button>
      <button type="button" className="single-post-right-panel-button" title="Usuń wpis">
        <img src={removeIco} alt="Ikona usunięcia postu" className="post-button-ico" />
      </button>
    </div>
  );
};

export default SinglePostRightPanel;

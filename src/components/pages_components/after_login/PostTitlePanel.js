import React from 'react';

const PostTitlePanel = () => {
  return (
    <div className="post-title-container">
      <h3 className="add-post-title">Tytuł wpisu:</h3>
      <input type="text" className="add-post-title-area" placeholder="Wprowadź tytuł wpisu..." maxLength="150" />
    </div>
  );
};

export default PostTitlePanel;

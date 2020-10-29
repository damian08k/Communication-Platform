import React from 'react';

const SinglePostLeftPanel = ({ postNumber, postTitle, postCategory }) => {
  return (
    <div className="single-post-left-panel">
      <div className="single-post-number">
        <p className="post-number">{postNumber}</p>
      </div>
      <p className="single-post-title">{postTitle}</p>
      <p className="single-post-category">{postCategory}</p>
    </div>
  );
};

export default SinglePostLeftPanel;

import React, { Fragment } from 'react';

import SinglePostLeftPanel from './SinglePostLeftPanel';
import SinglePostRightPanel from './SinglePostRightPanel';

const SinglePost = ({ id, postTitle, postCategory }) => {
  return (
    <div className="single-post">
      <SinglePostLeftPanel postNumber={id} postTitle={postTitle} postCategory={postCategory} />
      <SinglePostRightPanel />
    </div>
  );
};

export default SinglePost;

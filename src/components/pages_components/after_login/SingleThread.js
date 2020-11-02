import React from 'react';
import { Link } from 'react-router-dom';

import threadIco from '../../../assets/images/thread-ico.svg';

const SingleThread = ({ thread, id, index }) => {
  const isLink =
    id === '1' && index === 0 ? (
      <Link to={`/forum/temat-${id}`} className="panel-thread-link">
        {thread}
      </Link>
    ) : (
      <p className="panel-single-thread">{thread}</p>
    );

  return (
    <div className="single-thread-container">
      <img src={threadIco} alt="Ikona tematu" className="thread-icon" />
      {isLink}
    </div>
  );
};

export default SingleThread;

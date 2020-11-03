import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import threadIco from '../../../assets/images/thread-ico.svg';

const categoryPath = '/forum/:category';

const SingleThread = ({ thread, id, index }) => {
  const { path } = useRouteMatch();
  const topicSubpage = path === categoryPath ? `temat-${id}` : '';

  const isLink =
    id === '1' && index === 0 ? (
      <Link to={`/forum/kategoria-${id}/${topicSubpage}`} className="panel-thread-link">
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

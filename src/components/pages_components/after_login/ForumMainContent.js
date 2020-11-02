import React from 'react';

import SingleThread from './SingleThread';

import { MainForumSection } from '../../styled/Sections';

const ForumMainContent = ({ id, panelTitle, panelThreads }) => {
  const showSingleThread = panelThreads.map((thread, index) => <SingleThread key={index} thread={thread} id={id} index={index} />);

  return (
    <MainForumSection>
      <div className="forum-panel-container">
        <div className="forum-panel-title">
          <p className="panel-title">{panelTitle}</p>
        </div>
        <div className="forum-panel-threads">{showSingleThread}</div>
      </div>
    </MainForumSection>
  );
};

export default ForumMainContent;

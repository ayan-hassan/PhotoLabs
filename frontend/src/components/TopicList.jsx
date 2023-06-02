import React from 'react';

import '../styles/TopicList.scss'
import TopicListItem from './TopicListItem';

export default function TopicList(props) {
  const {topics, dispatch} = props;
  
  const topicComponent = topics.map(topic => 
    <TopicListItem 
      label={topic.title} 
      key={topic.id}
      topicId={topic.id}
      dispatch={dispatch}/>
      );

  return (
  <div className="top-nav-bar--topic-list">
    {topicComponent}
  </div>
  )
}


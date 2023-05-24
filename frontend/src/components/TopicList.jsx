import React from 'react';

import '../styles/TopicList.scss'
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const {topics, selectTopic} = props;
  
  const topicComponent = topics.map(topic => 
    <TopicListItem 
      label={topic.title} 
      link={topic.link} 
      key={topic.id}
      topicId={topic.id}
      selectTopic={selectTopic}/>
      );

  return (
  <div className="top-nav-bar--topic-list">
    {topicComponent}
  </div>
  )
}

export default TopicList
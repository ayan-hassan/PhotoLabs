import React from 'react';

import '../styles/TopicList.scss'
import FavBadge from './FavBadge';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const {topics} = props;
  
  const topicComponent = topics.map(topic => 
    <TopicListItem 
      label={topic.title} 
      link={topic.link} 
      key={topic.id}/>
      );

  return (
  <div className="top-nav-bar--topic-list">
    {topicComponent}
  </div>
  )
}

export default TopicList
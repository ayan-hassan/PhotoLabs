import React from 'react';

import '../styles/TopicList.scss'
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const topicsArray = props.topics;
  console.log(topicsArray);
  
  const topicComponent = [];
  for (let topics of topicsArray) {
    topicComponent.push(<TopicListItem/>)
  }

  return (
  <div className="top-nav-bar--topic-list">
    {topicComponent}
  </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList
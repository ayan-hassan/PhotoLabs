import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {

  return (
    <div className="topic-list--item" onClick={() => props.selectTopic(props.topicId)}>
      <span>
        {props.label}
      </span>
      
    </div>
  )
}

export default TopicListItem
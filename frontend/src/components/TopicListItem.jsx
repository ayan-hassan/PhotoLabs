import React from 'react';

import '../styles/TopicListItem.scss'

export default function TopicListItem(props) {

  const {label, topicId, dispatch} = props;

  return (
    <div className="topic-list--item" onClick={() => dispatch({type: "SELECT_TOPIC", payload: topicId})}>
      <span>
        {label}
      </span>
      
    </div>
  )
}

 
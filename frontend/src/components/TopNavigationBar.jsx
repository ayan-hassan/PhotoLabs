import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const {mockTopics} = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList mockTopics={mockTopics}/>
      <FavBadge/>
    </div>
  )
}

export default TopNavigation;
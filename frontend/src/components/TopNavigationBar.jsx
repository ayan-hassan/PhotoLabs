import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useEffect } from 'react';

const TopNavigation = (props) => {
  const {topics, favPhotos, isFavPhotoExist, setIsFavPhotoExist, selectTopic} = props;

  //when favphoto state includes a favourited photo, isfavphotoexists set to true and passed to favbadge
  useEffect(() => {
    if (favPhotos.length > 0) {
      setIsFavPhotoExist(true)
    } else {
      setIsFavPhotoExist(false)
    }
  }, [favPhotos])


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className="topics-favbadge">
        <TopicList topics={topics} selectTopic={selectTopic}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist} setIsFavPhotoExist={setIsFavPhotoExist}/>
      </div>
    </div>
  )
}

export default TopNavigation;
import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useEffect } from 'react';

export default function TopNavigation(props) {
  const {topics, isFavPhotoExist, setIsFavPhotoExist, dispatch, favList} = props;

  //when favphoto state includes a favourited photo, isfavphotoexists set to true and passed to favbadge
  useEffect(() => {
    if (favList.length > 0) {
      setIsFavPhotoExist(true)
    } else {
      setIsFavPhotoExist(false)
    }
  }, [favList])


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className="topics-favbadge">
        <TopicList topics={topics} dispatch={dispatch}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist} setIsFavPhotoExist={setIsFavPhotoExist}/>
      </div>
    </div>
  )
};


import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

export default function PhotoList(props) {
  const {photos, dispatch, favList, setFavList} = props;
  
  const photoComponent = photos.map(photo => 
    <PhotoListItem 
      username={photo.user.name} 
      imageSource={photo.urls.regular} 
      hideUserName= {photo.hideUserName} 
      key={photo.id}
      photoId={photo.id}
      photos={photos}
      name={photo.user.name}
      profilePhoto={photo.user.profile}
      city={photo.location.city}
      country={photo.location.country}
      dispatch={dispatch}
      favList={favList}
      setFavList={setFavList}
      />
  );
  
  return (
  <ul className="photo-list">
    {photoComponent}
  </ul>
  )
};

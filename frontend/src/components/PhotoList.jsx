import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {mockPhotos, favPhotos, setFavPhotos, openModal} = props;
  
  const photoComponent = mockPhotos.map(photo => 
    <PhotoListItem 
      username={photo.user.name} 
      imageSource={photo.urls.regular} 
      hideUserName= {photo.hideUserName} 
      key={photo.id}
      photoId={photo.id}
      favPhotos={favPhotos} 
      setFavPhotos={setFavPhotos}
      openModal={openModal}
      />
  );
  
  return (
  <ul className="photo-list">
    {photoComponent}
  </ul>
  )
}

export default PhotoList
import React, {useEffect} from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {photos, favPhotos, setFavPhotos, openModal} = props;

  console.log(photos)
  
  const photoComponent = photos.map(photo => 
    <PhotoListItem 
      username={photo.user.name} 
      imageSource={photo.urls.regular} 
      hideUserName= {photo.hideUserName} 
      key={photo.id}
      photoId={photo.id}
      favPhotos={favPhotos} 
      setFavPhotos={setFavPhotos}
      openModal={openModal}
      photos={photos}
      name={photo.user.name}
      profilePhoto={photo.user.profile}
      city={photo.location.city}
      country={photo.location.country}
      />
  );
  
  return (
  <ul className="photo-list">
    {photoComponent}
  </ul>
  )
}

export default PhotoList
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {photoId, favPhotos, setFavPhotos, openModal, name, city, country, profilePhoto} = props;

  return (
    <article className='photo-list--item' onClick={() => openModal(photoId)}>
      <PhotoFavButton photoId={photoId} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list--image" src={props.imageSource}/>
      <div className='photo-list--user-details'>
        <div className='photo-list--user-profile'>{profilePhoto}</div> 
        <div className='photo-list--name-location'>
          {name}
          <div className='photo-list--user-location'>{city}, {country}</div>
        </div>
      </div>
    </article>
  )
}

export default PhotoListItem
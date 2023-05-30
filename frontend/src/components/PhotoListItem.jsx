import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {photoId, favPhotos, setFavPhotos, openModal, name, city, country, profilePhoto} = props;

  return (
    <article className='photo-list--item'>
      <PhotoFavButton photoId={photoId} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list--image" onClick={() => openModal(photoId)} src={props.imageSource}/>
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile'src={profilePhoto}/> 
        <div className='photo-list--name-location'>
          {name}
          <div className='photo-list--user-location'>{city}, {country}</div>
        </div>
      </div>
    </article>
  )
}

export default PhotoListItem
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {photoId, favPhotos, setFavPhotos, openModal} = props;

  return (
    <article className='photo-list--item' onClick={() => openModal(photoId)}>
      <PhotoFavButton photoId={photoId} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list--image" src={props.imageSource}/>
    </article>
  )
}

export default PhotoListItem
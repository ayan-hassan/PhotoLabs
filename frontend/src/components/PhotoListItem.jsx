import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {photoId} = props;

  return (
    <article className='photo-list--item'>
      <PhotoFavButton photoId={photoId}/>
      <img className="photo-list--image" src={props.imageSource}/>
    </article>
  )
}

export default PhotoListItem
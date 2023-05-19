import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import PhotoFavButton from './PhotoFavButton';

const PhotoList = (props) => {
  // const {photoData, key} = props;
  // const photoArray = Object.values(props.photoData);
  // const parsedKey = Object.values(keys)
  // console.log(parsedKey)
  // const parsedPhotos = photoArray.map(photo => <PhotoListItem/>)

  const {mockPhotos} = props;
  const photoArray = Object.values(props)
  // console.log(photoArray[0])

  // const parsedPhotos = photoArray[0].map(photo => <PhotoList/>);
  const parsedPhotos = [];
  for (const photo of photoArray[0]) {
    parsedPhotos.push(
      <article className='photo-list--item'>
      <PhotoFavButton/>
      <img className="photo-list--image" src={photo.urls.regular}/>
    </article>
    )
  }


  return (
  <ul className="photo-list">
    {parsedPhotos}
  </ul> 
  )
}

export default PhotoList
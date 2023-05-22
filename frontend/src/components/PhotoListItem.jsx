import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <article className='photo-list--item'>
      <PhotoFavButton onClick={handleClick}/>
      <img className="photo-list--image" src={props.imageSource}/>
    </article>
  )
}

export default PhotoListItem
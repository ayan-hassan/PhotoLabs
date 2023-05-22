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

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// }

export default PhotoListItem
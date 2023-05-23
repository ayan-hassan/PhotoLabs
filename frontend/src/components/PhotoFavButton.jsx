import React, { useCallback, useState, useEffect } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photoId} = props;

  const [favPhotos, setFavPhotos] = useState([]);

  const [fav, setFav] = useState(false);

  const toggleFav = (photoId) => {
    setFav(fav ? false : true);
    if (!favPhotos.includes(photoId)) {
      setFavPhotos((prev) => [...prev, photoId]);
      console.log(favPhotos)
    } else {
      setFavPhotos((prev) => prev.filter((id) => id !== photoId));
      console.log('Unliked', favPhotos)
    }
  };

  return (
    <div key={photoId} onClick={() => toggleFav(photoId)} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
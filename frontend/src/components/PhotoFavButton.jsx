import React, { useCallback, useState, useEffect } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photoId, favPhotos, setFavPhotos} = props;

  const [fav, setFav] = useState(false);

  //when user click fav button, id of photo added to favphoto state if not already there, removes it if it is
  const toggleFav = (photoId) => {
    setFav(fav ? false : true);
    if (!favPhotos.includes(photoId)) {
      setFavPhotos((prev) => [...prev, photoId]);
    } else {
      setFavPhotos((prev) => prev.filter((id) => id !== photoId));
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
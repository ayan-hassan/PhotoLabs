import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

export default function PhotoFavButton(props) {
  const {photoId, favList, setFavList} = props;

  //when user click fav button, id of photo added to favphoto state if not already there, removes it if it is
  
  const toggleFav = (photoId) => {
    if (!favList.includes(photoId)) {
      setFavList((prev) => [...prev, photoId])
    } else {
      setFavList((prev) => prev.filter((id) => id !== photoId))
    }
  };
  
  let fav = favList.includes(photoId);

  return (
    <div key={photoId} onClick={() => toggleFav(photoId)} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
};
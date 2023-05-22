import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    setFav(fav ? false : true);
  }
  
  return (
    
    <div onClick={handleClick} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
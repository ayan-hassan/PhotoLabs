import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

  
function PhotoFavButton() {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    console.log("clicked");
  }
  
  return (
    
    <div className="photo-list--fav-icon">
      <button className="photo-list--fav-icon-svg">
        <FavIcon onClick={handleClick}/>
      </button>
    </div>
  );
}

export default PhotoFavButton;
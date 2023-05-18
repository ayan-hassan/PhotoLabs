import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

  
function PhotoFavButton() {

  
  return (
    
    <div className="photo-list--fav-icon">
      <button className="photo-list--fav-icon-svg">
        <FavIcon/>
      </button>
    </div>
  );
}

export default PhotoFavButton;
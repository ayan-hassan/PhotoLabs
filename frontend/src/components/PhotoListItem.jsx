import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

export default function PhotoListItem(props) {
  const {photoId, name, city, country, profilePhoto, dispatch, imageSource, favIcon, favList, setFavList} = props;


  return (
    <article className='photo-list--item'>
      <PhotoFavButton photoId={photoId} dispatch={dispatch} favIcon={favIcon} favList={favList} setFavList={setFavList}/>
      <img className="photo-list--image" onClick={() => dispatch({type: "OPEN_MODAL", payload: {photoId}})} src={imageSource}/>
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile'src={profilePhoto}/> 
        <div className='photo-list--name-location'>
          {name}
          <div className='photo-list--user-location'>{city}, {country}</div>
        </div>
      </div>
    </article>
  )
};

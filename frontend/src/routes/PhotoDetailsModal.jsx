import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'

export default function PhotoDetailsModal(props) {
  const {showModal, dispatch, photoId, photoData, favList, setFavList} = props;

  let fav = favList.includes(photoId)

  if (showModal) {
    const similarPhotoArr = photoData.similar_photos
    return (
      <div className='photo-details-modal'>
        <div className='photo-details-modal--button-selected_photo'>
          <button onClick={() => dispatch({type: "CLOSE_MODAL"})} className='photo-details-modal--close-button'>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_428_287)">
                <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className='photo-details-modal--image-container'>
            <img className="photo-details-modal--image" src={photoData.urls.regular}/>
              <div className="photo-details-modal--fav-button">
                <PhotoFavButton photoId={photoData.id} dispatch={dispatch} favList={favList} setFavList={setFavList}/>
              </div>
          </div>
          <div className='photo-details-modal--photographer-details'>
            <div className='photo-list--user-details'>
              <img className='photo-list--user-profile'src={photoData.user.profile}/> 
              <div className='photo-list--name-location'>
                {photoData.user.name}
                <div className='photo-list--user-location'>{photoData.location.city}, {photoData.location.country}</div>
              </div>
            </div>
          </div>
        </div>
        <p className="photo-details-modal--header">Related Photos</p>
        <div className="photo-details-modal--images">
          <PhotoList 
            photos={similarPhotoArr} 
            dispatch={dispatch}
            favList={favList}
            setFavList={setFavList}
            />
        </div>
      </div>
      )
    } else {
      return;
    }
  };
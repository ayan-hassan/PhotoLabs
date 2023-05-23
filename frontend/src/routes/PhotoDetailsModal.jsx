import React, {useEffect} from 'react';
import PhotoList from '../components/PhotoList';
// import mockPhotos from '../mocks/photos.js';


import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = (props) => {
  const {openModal, showModal, selectedPhoto, favPhotos, setFavPhotos} = props;

  if (showModal) {
    const similarPhotoArr = Object.values(selectedPhoto.similar_photos)
    return (
      <div className='photo-details-modal'>
        <button onClick={openModal} className='photo-details-modal--close-button'>
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
        <img className="photo-details-modal--image" src={selectedPhoto.urls.regular}/>
        <p className="photo-details-modal--header">Similar Photos</p>
        <div className="photo-details-modal--images">
          <PhotoList 
            photos={similarPhotoArr} 
            favPhotos={favPhotos} 
            setFavPhotos={setFavPhotos} />
        </div>
      </div>
      )
    } else {
      return;
    }
  }

export default PhotoDetailsModal;
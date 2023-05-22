import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {mockPhotos} = props;
  
  const photoComponent = mockPhotos.map(photo => 
    <PhotoListItem 
      username={photo.user.name} 
      imageSource={photo.urls.regular} 
      hideUserName= {photo.hideUserName} 
      key={photo.id}/>
  );
  
  return (
  <ul className="photo-list">
    {photoComponent}
  </ul>
  )
}

// PhotoList.defaultProps = {
//   photos: [
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 1,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 2,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 3,
//      hideUserName: false,
//     }
//    ]
// }

export default PhotoList
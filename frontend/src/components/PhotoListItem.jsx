
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({username, imageSource, id, hideUserName}) => {
  return (
    <>
      {username}
      {imageSource}
      {id}
      {hideUserName}
    </>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem
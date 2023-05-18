import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import '../src/styles/PhotoList.scss'

// Note: Rendering a single component to build components in isolation


const displayPhotos = (photo) => {
  const photos = []
  for (let i = 0; i < 3; i++) {
    photos.push(photo)
  }
  return photos;
}

const App = () => (
  <div className="App">
    <main className='photo-list'>
      {displayPhotos(<PhotoListItem/>)}
    </main>
    
  </div>
)

export default App
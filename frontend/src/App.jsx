import React from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';

import mockPhotos from './mocks/photos.json'

// Note: Rendering a single component to build components in isolation


const App = () => (
  <div className="App">
    <HomeRoute mockPhotos={mockPhotos}/>
  </div>
)

export default App
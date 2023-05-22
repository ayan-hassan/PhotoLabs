import React from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';

import mockPhotos from './mocks/photos.json'
import mockTopics from './mocks/topics.json'

// Note: Rendering a single component to build components in isolation


const App = () => (
  <div className="App">
    <HomeRoute mockPhotos={mockPhotos} mockTopics={mockTopics}/>
  </div>
)

export default App
import React, {useState, useEffect} from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/PhotoDetailsModal.scss';

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation

const App = () => {

  //state and API calls in hooks/useApplicationData.js
  const { state, openModal, setFavPhotos, setSelectedTopic} = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos} 
        topics={state.topics} 
        favPhotos={state.favPhotos} 
        setFavPhotos={setFavPhotos}
        openModal={openModal}
        selectedTopic={state.selectedTopic}
        setSelectedTopic={setSelectedTopic}
        selectTopic={state.selectedTopic} />
        
      <PhotoDetailsModal 
        openModal={openModal} 
        showModal={state.showModal}
        selectedPhoto={state.selectedPhoto}
        favPhotos={state.favPhotos}
        setFavPhotos={setFavPhotos}
        photoId={state.photos.id}
        />
    </div>
  );
};
export default App;
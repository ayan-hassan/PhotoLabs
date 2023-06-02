import React, {useState, useEffect} from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/PhotoDetailsModal.scss';

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation

const App = () => {

  //state and API calls in hooks/useApplicationData.js
  const { state, dispatch } = useApplicationData();

  const [favList, setFavList] = useState([])
  
  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}
        topics={state.topics} 
        dispatch={dispatch}
        favList={favList}
        setFavList={setFavList}
        />
        
      <PhotoDetailsModal
        dispatch={dispatch} 
        showModal={state.showModal}
        selectedPhoto={state.selectedPhoto}
        photoId={state.photos.id}
        photoData={state.photoData}
        favList={favList}
        setFavList={setFavList}
        />
    </div>
  );
};
export default App;
import React, {useState} from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/PhotoDetailsModal.scss';

import mockPhotos from './mocks/photos.json'
import mockTopics from './mocks/topics.json'
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);
  const [photoData, setPhotoData] = useState();

  const openModal = (id) => {
    const photo = mockPhotos.find((photo) => photo.id === id);
    setShowModal(showModal ? false : true);
    setSelectedPhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute openModal={openModal} mockPhotos={mockPhotos} mockTopics={mockTopics} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <PhotoDetailsModal openModal={openModal} showModal={showModal} setShowModal={setShowModal} photoData={setPhotoData} setPhotoData={setPhotoData}/>
    </div>
  );
};
export default App;
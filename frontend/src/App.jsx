import React, {useState, useEffect} from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/PhotoDetailsModal.scss';

import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [favPhotos, setFavPhotos] = useState([]);
  
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  //fetches topics
  useEffect(() => {
    fetch('/api/topics/', {
      method: 'GET'
    })
    .then(res => {
      return res.json();
    })
    .then(json => {
      setTopics(json);
    })
    .catch(err => console.log(err));
  }, []);

  //opens modal when image clicked
  const openModal = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setShowModal(showModal ? false : true);
    setSelectedPhoto(photo);
  }

  const selectTopic = (id) => {
    setSelectedTopic(id);
  }

  //fetches filtered photo data when topic is selected, else displays all photos
  useEffect(() => {
    const fetchFilteredPhotos = (topic) => {
      if (selectedTopic) {
        fetch(`/api/topics/photos/${selectedTopic}`)
          .then((res) => res.json())
          .then((data) => {
            setPhotos(data);
          })
          .catch((err) => console.log(err));
      } else {
        fetch("/api/photos")
          .then((res) => res.json())
          .then((data) => {
            setPhotos(data);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchFilteredPhotos(selectTopic);
  }, [selectedTopic]);
  
  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favPhotos={favPhotos} 
        setFavPhotos={setFavPhotos}
        openModal={openModal}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        selectTopic={selectTopic} />
        
      <PhotoDetailsModal 
        openModal={openModal} 
        showModal={showModal}
        selectedPhoto={selectedPhoto}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        photoId={photos.id}
        />
    </div>
  );
};
export default App;
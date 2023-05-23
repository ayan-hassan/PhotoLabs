import React, {useState, useEffect} from 'react';
import HomeRoute from './components/HomeRoute';

import './App.scss';
import './styles/PhotoDetailsModal.scss';

// import photos from './mocks/photos.json'
// import mockTopics from './mocks/topics.json'
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = (props) => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [favPhotos, setFavPhotos] = useState([]);
  // const [filteredPhotos, setFilteredPhotos] = useState([]);
  
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/photos/', {
      method: 'GET'
    })
    .then(res => {
      // console.log(res);
      return res.json();
    })
    .then(json => {
      setPhotos(json);
    })
    .catch(err => console.log(err));
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

  const openModal = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setShowModal(showModal ? false : true);
    setSelectedPhoto(photo);
  }

  const selectTopic = (id) => {
    setSelectedTopic(id);
  }

  useEffect(() => {
    const fetchData = (topic) => {
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
    fetchData(selectTopic);
  }, [selectedTopic]); // Fetch photo data when the selected topic changes
  
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
        />
    </div>
  );
};
export default App;
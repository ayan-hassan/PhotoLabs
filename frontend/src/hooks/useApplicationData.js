import { useState, useEffect } from "react";

export default function useApplicationData() {
    const initialState = {
      showModal: false,
      selectedPhoto: null,
      selectedTopic: null,
      favPhotos: [],
      photos: [],
      topics: []
    }

    const [showModal, setShowModal] = useState(initialState.showModal);
    const [selectedPhoto, setSelectedPhoto] = useState(initialState.selectedPhoto);
    const [selectedTopic, setSelectedTopic] = useState(initialState.selectedTopic)
    const [favPhotos, setFavPhotos] = useState(initialState.favPhotos);
    
    const [photos, setPhotos] = useState(initialState.photos);
    const [topics, setTopics] = useState(initialState.topics);
  
    const state = {
      showModal,
      selectedPhoto,
      selectedTopic,
      favPhotos,
      photos,
      topics
    };
  
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
  
    return { state, openModal, setFavPhotos, setSelectedTopic };
  };
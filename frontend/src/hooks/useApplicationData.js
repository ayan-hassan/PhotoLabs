import { useEffect, useReducer } from "react";

export default function useApplicationData() {

    const INITIAL_STATE = {
      showModal: false,
      selectedPhoto: null,
      selectedTopic: null,
      photoData: undefined,
      photos: [],
      topics: [], 
      favIcon: false
    }

    const appReducer = (state, action) => {
      switch (action.type) {
        case "FETCH_TOPICS":
          const loadTopics = { ...state};
          loadTopics.topics = action.payload.topics
          return loadTopics

        case "FETCH_PHOTOS":
          const loadPhotos = { ...state};
          loadPhotos.photos = action.payload.photos
          return loadPhotos

        case "SELECT_TOPIC":
          const selectTopic = {...state}
          selectTopic.selectedTopic = action.payload;
          return selectTopic;

        case "OPEN_MODAL":
          const openModal = {...state};
          const modalPhoto = openModal.photos.find(photo => photo.id === action.payload.photoId);
          return {
            ...state,
            showModal: true,
            modalPhoto,
            photoData: modalPhoto
          }

        case "CLOSE_MODAL":
          const closeModal = { ...state };
          closeModal.showModal = false;
          closeModal.photoData = undefined;
          return closeModal;

        default: 
          return state;
      }
    }

    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

    //fetches topics
    useEffect(() => {
      let loadTopics = {};
      fetch('/api/topics/', {
        method: 'GET'
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        loadTopics.topics = json
        dispatch( {type: 'FETCH_TOPICS', payload: loadTopics})
      })
      .catch(err => console.log(err));
    }, []);

    const selectTopic = (id) => {
      setSelectedTopic(id);
    }

    //fetches filtered photo data when topic is selected, else displays all photos
    useEffect(() => {
      const fetchFilteredPhotos = (topic) => {
        let loadPhotos = {};
        if (state.selectedTopic) {
          fetch(`/api/topics/photos/${state.selectedTopic}`)
            .then((res) => res.json())
            .then((json) => {
              loadPhotos.photos = json;
              dispatch( {type: 'FETCH_PHOTOS', payload: loadPhotos})
            })
            .catch((err) => console.log(err));
        } else {
          fetch("/api/photos")
            .then((res) => res.json())
            .then((json) => {
              loadPhotos.photos = json;
              dispatch( {type: 'FETCH_PHOTOS', payload: loadPhotos})
            })
            .catch((err) => console.log(err));
        }
      };
      fetchFilteredPhotos(selectTopic);
    }, [state.selectedTopic]);
  
    return { state, dispatch }
  };
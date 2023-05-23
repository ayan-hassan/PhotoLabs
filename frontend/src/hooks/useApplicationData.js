import { useState } from "react";

export default function useApplicationData(props) {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const openModal = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setShowModal(showModal ? false : true);
    setSelectedPhoto(photo);
  }
  return (
    openModal,
    favPhotos,
    setFavPhotos,
    showModal,
    selectedPhoto
  );
}
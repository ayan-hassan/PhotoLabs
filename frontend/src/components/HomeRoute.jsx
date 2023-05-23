import React, {useState} from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";


export default function HomeRoute(props) {

  const {photos, mockTopics, favPhotos, setFavPhotos, openModal} = props;

  // const [favPhotos, setFavPhotos] = useState([]);

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  

  return (
    <div className="home-route">
      <TopNavigation mockTopics={mockTopics} favPhotos={favPhotos} isFavPhotoExist={isFavPhotoExist} setIsFavPhotoExist={setIsFavPhotoExist}/>
      <PhotoList openModal={openModal} photos={photos} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
    </div>
  )
}

//when I click the button, save the event to a array/object?
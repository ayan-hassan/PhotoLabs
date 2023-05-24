import React, {useState, useEffect} from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";


export default function HomeRoute(props) {

  const {photos, topics, favPhotos, setFavPhotos, openModal, selectTopic} = props;

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);  

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favPhotos={favPhotos} 
        isFavPhotoExist={isFavPhotoExist} 
        setIsFavPhotoExist={setIsFavPhotoExist} 
        selectTopic={selectTopic}/>
      <PhotoList 
        openModal={openModal} 
        photos={photos} 
        favPhotos={favPhotos} 
        setFavPhotos={setFavPhotos}/>
    </div>
  )
}

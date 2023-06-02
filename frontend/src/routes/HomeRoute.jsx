import React, {useState} from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


export default function HomeRoute(props) {

  // const {photos, topics, favPhotos, setFavPhotos, openModal, selectTopic} = props;
  const {photos, topics, favPhotos, selectedTopic, dispatch, favList, setFavList, fav, setFav} = props;

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);  

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favPhotos={favPhotos} 
        isFavPhotoExist={isFavPhotoExist} 
        setIsFavPhotoExist={setIsFavPhotoExist} 
        selectTopic={selectedTopic}
        dispatch={dispatch}
        favList={favList}/>
      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos} 
        dispatch={dispatch}
        favList={favList}
        setFavList={setFavList}
        fav={fav}
        setFav={setFav}
        />
    </div>
  )
}

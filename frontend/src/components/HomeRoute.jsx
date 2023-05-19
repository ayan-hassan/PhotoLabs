import React, {useState} from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import mockPhotos from '../mocks/photos.js'


export default function HomeRoute() {


  // const [favs, setFavs] = useState(0)
  // const [alert, showAlert] = useState(false)

  // const countFavs = (fav) => {
  //   if (fav) {
  //     setFavs(favs + 1)
  //   } else {
  //     setFavs (favs - 1)
  //   }
  // }



  return (
    <div className="home-route">
      <TopNavigation/>
      <PhotoList mockPhotos={mockPhotos}/>
    </div>
  )
}
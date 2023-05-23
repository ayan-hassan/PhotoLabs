import React, {useState} from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";


export default function HomeRoute(props) {

  const {mockPhotos, mockTopics} = props;

  return (
    <div className="home-route">
      <TopNavigation mockTopics={mockTopics}/>
      <PhotoList mockPhotos={mockPhotos}/>
    </div>
  )
}

//when I click the button, save the event to a array/object?
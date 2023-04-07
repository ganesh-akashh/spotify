import React from 'react';
import "../Styles/MainContainer.css";
import Banner from './Banner';
import {FaUsers} from "react-icons/fa";
import AudioList from './AudioList';


export default function MainContainer() {
  return (
    <div className='mainContainer'>
      <Banner />
      <div className='menuList'>
        <ul>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Albums</a></li>
          <li><a href='#'>Aritst</a></li>
          <li><a href='#' className='active'>Songs</a></li>
          <li><a href='#'>Fans</a></li>
        </ul>
        <p><i><FaUsers /></i>
        {" "}
        <span>200 million</span>
        </p>
      </div>
      <AudioList />
    </div>
  )
}

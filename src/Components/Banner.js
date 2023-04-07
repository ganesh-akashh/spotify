import React from 'react';
import artist from "../img/artist.jpg";
import Check from "../img/check.png";
import {FaEllipsisH,FaHeadphones,FaCheck}  from "react-icons/fa"; 

export default function Banner() {
  return (
    <div className='banner'>
      <img src={artist} className='bannerImg'></img>
      <div className='content'>
        <div className='breadCrump'>
          <p>Home <span>/Popular artist</span></p>
         <i>
          <FaEllipsisH />
         </i>
        </div>
        <div className='artist'>
        <div className='left'>
          <div className='name'>
            <h2>Made For You</h2>
            <img src={Check} alt=''></img>
          </div>
          <p><i><FaHeadphones /></i>
          {" "} 
          11,345,789 <span>Monthly listeners</span>
          </p>
        </div>
        <div className='right'>
           <a href='#'>Play</a>
           <a href='#'><i> <FaCheck /> </i> Following </a>
        </div>
         

        </div>
      </div>
      <div className='bottomLayer'></div>
    </div>
  )
}

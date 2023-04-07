import React from 'react';
import {BsFillVolumeUpFill,BsMusicNoteList} from "react-icons/bs";
import { FaDesktop} from "react-icons/fa";
import track from "../img/track.png";

export default function TrackList() {
  return (
    <div className='trackList'>
    <div className='top'>
    <img  src={track} alt=''/>
    <p className='trackName'>Sample Name <span className='trackSpan'>Artist</span></p>
    </div>
    <div className='bottom'>
     <i><BsFillVolumeUpFill /></i>
     <input type='range' min={0} max={100}  value={35}/>
     <i> <BsMusicNoteList /></i>
     <i><FaDesktop /></i>
    </div>

    </div>
  )
}

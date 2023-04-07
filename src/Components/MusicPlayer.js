import React, { useState } from 'react';
import "../Styles/MusicPlayer.css";
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useRef } from 'react';

export default function MusicPlayer({ song, imgSrc }) {

  const [isLove, setLove] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const audioPlayer = useRef();

  function changeLove() {
    setLove(!isLove);
  }
  function changePlayPause() {

    const prevValue = isPlay;
    console.log(prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
    }
    else {
      audioPlayer.current.pause();
    }
    setPlay(!prevValue);
  }



  return (
    <div className='musicPlayer'>
      <div className='songImage'>
        <img src={imgSrc}></img>
      </div>
      <div className='songAttributes'>
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left" >
            <div className='loved' onClick={changeLove}>
              {isLove ? <i><FaHeart /></i> : <i><FaRegHeart /></i>}
            </div>
            <div className='download'><i><BsDownload /></i></div>
          </div>
          <div className="middle">
            <div className='back'>

              <i><FaBackward /></i>
            </div>
            <div className='playPause' onClick={changePlayPause}>
              {isPlay ? <i className='button'><FaPause /></i> : <i className='button'><FaPlay /></i>}

            </div>
            <div className='forward'>
              <i><FaForward /></i>

            </div>
          </div>
          <div className="right">
            <i className='shareButton'><FaShareAlt /></i>
          </div>
        </div>
        <div className="bottom">
        </div>
      </div>
    </div>
  )
}

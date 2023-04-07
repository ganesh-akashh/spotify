import React, { useEffect, useState } from 'react'
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa'
import Songs from './songs';
import $ from 'jquery';
import MusicPlayer from './MusicPlayer';


export default function AudioList() {
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImg] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll(".song");
        function changeMenuActive() {
            $(songs).removeClass("active");
            $(this).addClass("active");
        }

        songs.forEach((n) => {

            n.addEventListener("click", changeMenuActive);
        })
    }, []);




    //For selectiong favorites
    function changeFavourite(id) {
        Songs.forEach((song) => {
            if (song.id == id) {
                song.favourite = !song.favourite;
            }
        })
        setSongs([...Songs]);
    }

    function setMainSong(songSrc, imgSrc) {
        setSong(songSrc);
        setImg(imgSrc);
    }

    return (
        <div className='audioList'>
            <div className='heading'>
                <h2 className='title'>
                    The list {" "}<span>{Songs.length} songs</span>
                </h2>
            </div>
            <div className='songContainer'>

                {
                    songs && songs.map((song, index) => (
                        <div className='songs ' key={song.id} onClick={() => setMainSong(song.song, song.imgSrc)}>
                            <div className=' count'>#{index + 1}</div>
                            <div className='song'>
                                <div className='imgBox'>
                                    <img src={song.imgSrc} alt=''></img>
                                </div>
                                <div className='section'>
                                    <p className='songName'>
                                        <p className='songName1'>{song.songName}</p>
                                        <span className='spanArtist'>{song.artist}</span>
                                    </p>
                                    <div className='hits'>
                                        <p className='hit'><i><FaHeadphones /></i>{song.votes}</p>
                                        <p className='duration'><i><FaRegClock /></i>{song.duration}</p>

                                        <div className='favourite' onClick={() => changeFavourite(song.id)}>
                                            {song.favourite ? <i><FaHeart /> </i> : <i><FaRegHeart /></i>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }
            </div>

            <MusicPlayer song={song} imgSrc={img} />




        </div>



    )
}

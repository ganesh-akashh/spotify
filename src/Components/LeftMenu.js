import React from 'react'
import "../Styles/LeftMenu.css";
import { FaSpotify,FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import MenuList from './MenuList';
import Menu from './Menu';
import MenuPlaylist from './MenuPlaylist';
import TrackList from './TrackList';

export default function LeftMenu() {
    return (
        <div className='leftMenu'>
         <div className='logoContainer'>
            <i><FaSpotify></FaSpotify></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH></FaEllipsisH></i>
         </div>
         <div className='searchBox'>
         <input type="text" placeholder='Search..' />
         <i className='searchIcon'>
            <BiSearchAlt></BiSearchAlt>
         </i>
         </div>
        <Menu title={"Menu"} listObject={MenuList}/>
        <MenuPlaylist />
        <TrackList />
        </div>
    )
}

import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse } from "react-icons/bi";
import { FaBroadcastTower, FaPodcast, FaMicrophoneAlt } from "react-icons/fa";
import React from "react";

const MenuList = [
    {
        id: 1,
        name: "Home",
        icon: <BsFillHouseFill />
    },
    {
        id: 2,
        name: "Discover",
        icon: <BiPulse />
    },
    {
        id: 3,
        name: "Radio",
        icon: <FaBroadcastTower />
    },
    {
        id: 4,
        name: "Artist",
        icon: <FaMicrophoneAlt />
    },
    {
        id: 5,
        name: "Albums",
        icon: <BsJournalAlbum />
    },
    {
        id: 6,
        name: "Podcasts",
        icon: <FaPodcast />
    }
]

export default MenuList;
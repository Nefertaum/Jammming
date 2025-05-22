import React from "react";
import Playlist from "./Playlist";

const Track = ({ track }) => {
 return track.map((song) => <p>{song.name}</p>);
}

export default Track;
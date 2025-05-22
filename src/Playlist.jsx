import React from "react";
import SearchResults from "./SearchResults";

const Playlist = ({ playlistName, playlist, onCreate }) => {
     function handleCreate() {
        onCreate(playlistName, playlist);
     };
   
     return (
     <button onClick={handleCreate}>Create</button>
    );
};

export default Playlist;
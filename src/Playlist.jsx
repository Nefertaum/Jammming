import React from "react";
import SearchResults from "./SearchResults";

const Playlist = ({ playlistName, playlist, uri, onCreate }) => {
  function handleCreate() {
    onCreate(playlistName, playlist, uri);
  }

  return <button onClick={handleCreate}>Create</button>;
};

export default Playlist;

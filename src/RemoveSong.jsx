import React from "react";

function RemoveSong({ currentPlaylist, removeSong, saveUserPlaylist }) {
  const style = {
    border: "solid 1px black",
    fontSize: "1.1rem",
    backgroundColor: "#121212",
    color: "#FFF",
    margin: "3px",
    padding: "10px",
    borderRadius: "8px",
  };
  return (
    <div>
      {currentPlaylist.playlist.map((song, index) => (
        <div key={index} style={style}>
          <p>Track: {song.name}</p>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <button onClick={() => removeSong(index)}>X</button>
        </div>
      ))}
      <button onClick={() => saveUserPlaylist(currentPlaylist)}>Save</button>
    </div>
  );
}

export default RemoveSong;

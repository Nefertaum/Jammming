import React from "react";

function RemoveSong({ currentPlaylist, removeSong, saveUserPlaylist }) {
  const style = {
    border: "solid 1px black",
    fontSize: "2rem",
  };
  return (
    <div>
      {currentPlaylist.playlist.map((song, index) => (
        <div key={index} style={style}>
          <p>{song.name}</p>
          <button onClick={() => removeSong(index)}>X</button>
        </div>
      ))}
      <button onClick={() => saveUserPlaylist(currentPlaylist)}>Save</button>
    </div>
  );
}

export default RemoveSong;

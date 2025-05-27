import React from "react";

function RemoveSong({ currentPlaylist, removeSong, saveUserPlaylist }) {
  return (
    <div>
      {currentPlaylist.playlist.map((song, index) => (
        <div key={index}>
          <p>{song.name}</p>
          <button onClick={() => removeSong(index)}>X</button>
        </div>
      ))}
      <button onClick={() => saveUserPlaylist(currentPlaylist)}>Save</button>
    </div>
  );
}

export default RemoveSong;

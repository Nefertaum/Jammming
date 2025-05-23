import React from "react";

function RemoveSong({ currentPlaylist, onRemove }) {
  return (
    <div>
      {currentPlaylist.playlist.map((song, index) => (
        <div key={index}>
          <p>{song.name}</p>
          <button onClick={() => onRemove(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default RemoveSong;

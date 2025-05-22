import React from "react";

function RemoveSong({ createPlaylist, onRemove }) {
return (
    <div>
        {createPlaylist.playlist.map((song, index) => (
            <div key={index}> 
            <p>{song.name}</p>
            <button onClick={() => onRemove(index)}>X</button>
            </div>
        ))}
    </div>
)
};

export default RemoveSong;
import React, { useState } from "react";
import Search from "./Search";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

const SearchResults = ({ search, data, addSongToPlaylist }) => {
  const match = data.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      {match
        ? match.map((matchItem, index) => (
            <div key={index}>
              {`Find: ${matchItem.name} by Artist: ${matchItem.artist} from Album: ${matchItem.album}`}
              <button onClick={() => addSongToPlaylist(matchItem)}>Add</button>
            </div>
          ))
        : `No match found`}
    </>
  );
};

export default SearchResults;

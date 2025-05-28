import React, { useState } from "react";
import Search from "./Search";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

const SearchResults = ({
  search,
  data,
  addSongToPlaylist,
  currentPlaylist,
}) => {
  const style = {
    border: "solid 1px black",
    fontSize: "1.1rem",
    color: "#FFF",
    backgroundColor: "#121212",
    margin: "3px",
    padding: "10px",
    borderRadius: "8px",
  };

  const match = data.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      {match
        ? match.map((matchItem, index) => (
            <div key={index} style={style}>
              {`Find: ${matchItem.name} by Artist: ${matchItem.artist} from Album: ${matchItem.album}`}
              <button
                onClick={() =>
                  currentPlaylist.id ? addSongToPlaylist(matchItem) : ""
                }
              >
                +
              </button>
            </div>
          ))
        : `No match found`}
    </>
  );
};

export default SearchResults;

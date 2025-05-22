import React, {useState} from "react";
import Search from "./Search";
import  Tracklist  from "./Tracklist";
import Playlist from "./Playlist";

const SearchResults = ({search, data, onAdd}) => {
const match = data.find(({ name }) => name === search);
 return (
    <div>
        {match? `Find: ${match.name} by Artist: ${match.artist} from Album: ${match.album}` : `No match found` }
         <button onClick={() => match? onAdd(match) : "I'm Affraid I can't do that."}>Add</button>
    </div>
   
 )
};

export default SearchResults;   
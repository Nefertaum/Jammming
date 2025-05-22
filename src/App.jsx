import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from "./Search"
import SearchResults from "./SearchResults"
import Tracklist from "./Tracklist"
import Playlist from "./Playlist"
import Track from './Track'
import RemoveSong from './RemoveSong'

function App() {
const [search, setSearch] = useState("");
function handleChangeSearch(e){
setSearch(e.target.value);
};
const [playlistName, setPlaylistName] = useState("");
function handleChangePlaylistName (e) {
  setPlaylistName(e.target.value);
};   
const [playlist, setPlaylist] = useState([{name: "Goldie", artist: "Doly Parton"}, {name:"Stein"}]);
function addSong(newSong) {
        setPlaylist(prev => [newSong, ...prev]);
    };

 const [createPlaylist, setCreatePlaylist] = useState({
  name:"",
  playlist: []
});

function addPlaylist(newName, playlistArray){
 setCreatePlaylist({
  name: newName,
  playlist: playlistArray
});
};   

function addSongToPlaylist(newSong) {
        setCreatePlaylist(prev => ({
        ...prev, 
         playlist: [newSong, ...prev.playlist]
        }));
    };

function removeSong(indexToRemove){
  setCreatePlaylist(prev => ({
    ...prev,
    playlist: prev.playlist.filter((_,index) => index !== indexToRemove)
  }));
}
  
  return (
    <>
      <div>
        <label htmlFor="Search">Search Song: </label>
        <input id="Search"  type="search" name="Search" onChange={handleChangeSearch} value={search} />
        <p><Search value={search}/></p>
        </div>
      <div>
      <p><SearchResults search={search} data={Tracklist} onAdd={addSongToPlaylist}/></p>
      </div>
      <div>
        <label htmlFor="playlistName">Name your Playlist: </label>
        <input id="playlistName" type="text" onChange={handleChangePlaylistName} value={playlistName} />
        <Playlist playlistName={playlistName} playlist={playlist} onCreate={addPlaylist} />
        {/* <button onClick={() => addPlaylist(playlistName, playlist )}>Create</button> */}
         <p>{createPlaylist.name}</p>
           <RemoveSong createPlaylist={createPlaylist} onRemove={removeSong} />
       {createPlaylist.playlist.map((element, index) => (
        <div>
        <p key={index}>{element.name}</p>
        <button onClick={removeSong}>X</button>
        </div>))
        }
      
        {/* <Playlist value={createPlaylist} /> */}
        <p>{playlistName}</p>
        {/* <Track track={playlist} /> */}
       
        
      </div>
      
    </>
  )
}

export default App;
 

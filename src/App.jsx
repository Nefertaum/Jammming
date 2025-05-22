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

function changeTextHeading(newHeading) {
    setCreatePlaylist(prev =>({
      ...prev,
      name: newHeading
    }));
}

function removeSong(indexToRemove){
  setCreatePlaylist(prev => ({
    ...prev,
    playlist: prev.playlist.filter((_,index) => index !== indexToRemove)
  }));
};

const [editing, setEditing] = useState(false);
   
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
        <div>{editing? (<>
        <input 
          value={createPlaylist.name} 
          onChange={(e) => 
            changeTextHeading(e.target.value)
          }
          />
          <button 
          onClick={() => setEditing(false)}
          >
            SAVE
            </button> 
            </>
          ) : (
          <>
          <span>{createPlaylist.name}</span>
          <button onClick={() => 
            setEditing(true)}> 
            EDIT
            </button>
            </> 
          )}
          </div>
           <RemoveSong createPlaylist={createPlaylist} onRemove={removeSong} />
      </div>
      
    </>
  )
}

export default App;
 

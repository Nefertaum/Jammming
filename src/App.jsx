import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import Track from "./Track";
import RemoveSong from "./RemoveSong";
import PlaylistSelector from "./PlaylistSelector";

function App() {
  const [search, setSearch] = useState("");
  function handleChangeSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  const [playlistName, setPlaylistName] = useState("");
  function handleChangePlaylistName(e) {
    setPlaylistName(e.target.value);
  }
  const [playlist, setPlaylist] = useState([
    { name: "Goldie", artist: "Doly Parton" },
    { name: "Stein" },
  ]);

  const [createPlaylist, setCreatePlaylist] = useState({
    name: "",
    playlist: [],
  });

  const [userPlaylists, setUserPlaylists] = useState([]);

  const [currentPlaylist, setCurrentPlaylist] = useState(createPlaylist);

  function addPlaylist(newName, playlistArray) {
    setUserPlaylists((prev) => [
      ...prev,
      {
        id: userPlaylists.length + 1,
        name: newName,
        playlist: playlistArray,
      },
    ]);
  }

  function addSongToPlaylist(newSong) {
    setCurrentPlaylist((prev) => ({
      ...prev,
      playlist: [newSong, ...prev.playlist],
    }));
  }

  function changeTextHeading(newHeading) {
    setCurrentPlaylist((prev) => ({
      ...prev,
      name: newHeading,
    }));
  }

  function removeSong(indexToRemove) {
    setCurrentPlaylist((prev) => ({
      ...prev,
      playlist: prev.playlist.filter((_, index) => index !== indexToRemove),
    }));
  }

  const [editing, setEditing] = useState(false);

  return (
    <>
      <div>
        <label htmlFor="Search">Search Song: </label>
        <input
          id="Search"
          type="search"
          name="Search"
          onChange={handleChangeSearch}
          value={search}
        />
        <p>
          <Search value={search} />
        </p>
      </div>
      <div>
        {search ? (
          <SearchResults
            search={search}
            data={Tracklist}
            addSongToPlaylist={addSongToPlaylist}
          />
        ) : null}
      </div>
      <div>
        <label htmlFor="playlistName">Name your Playlist: </label>
        <input
          id="playlistName"
          type="text"
          onChange={handleChangePlaylistName}
          value={playlistName}
        />
        <Playlist
          playlistName={playlistName}
          playlist={playlist}
          onCreate={addPlaylist}
        />
        {currentPlaylist && (
          <>
            {editing ? (
              <div>
                <input
                  value={currentPlaylist.name}
                  onChange={(e) => changeTextHeading(e.target.value)}
                />
                <button onClick={() => setEditing(false)}>SAVE</button>
              </div>
            ) : (
              <div>
                <span>{currentPlaylist.name}</span>
                <button onClick={() => setEditing(true)}>EDIT</button>
              </div>
            )}
          </>
        )}

        <RemoveSong currentPlaylist={currentPlaylist} onRemove={removeSong} />
      </div>
      <h1>{createPlaylist.id}</h1>
      <pre>{JSON.stringify(currentPlaylist, null, 2)}</pre>
      <PlaylistSelector
        userPlaylists={userPlaylists}
        currentPlaylist={currentPlaylist}
        setCurrentPlaylist={setCurrentPlaylist}
      />
    </>
  );
}

export default App;

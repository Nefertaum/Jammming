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
  const [playlistName, setPlaylistName] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [uri, setUri] = useState([]);
  const [createPlaylist, setCreatePlaylist] = useState({
    name: "",
    playlist: [],
    uri: [],
  });
  const [editing, setEditing] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState(createPlaylist);

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleChangePlaylistName(e) {
    setPlaylistName(e.target.value);
  }

  function addPlaylist(newName, playlistArray, uriArray) {
    setUserPlaylists((prev) => [
      ...prev,
      {
        id: userPlaylists.length + 1,
        name: newName,
        playlist: playlistArray,
        uri: uriArray,
      },
    ]);
  }

  function saveUserPlaylist(currentPlaylist) {
    setUserPlaylists((prev) => {
      const index = currentPlaylist.id - 1;
      return [
        ...prev.slice(0, index),
        currentPlaylist,
        ...prev.slice(index + 1),
      ];
    });
  }

  function addSongToPlaylist(newSong) {
    setCurrentPlaylist((prev) => ({
      ...prev,
      playlist: [newSong, ...prev.playlist],
      uri: [newSong.uri, ...prev.uri],
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
      uri: prev.uri.filter((_, index) => index !== indexToRemove),
    }));
  }

  return (
    <>
      <div className="body">
        <div className="searchResults">
          <div className="search">
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
                currentPlaylist={currentPlaylist}
              />
            ) : null}
          </div>
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
            uri={uri}
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

          <RemoveSong
            currentPlaylist={currentPlaylist}
            removeSong={removeSong}
            saveUserPlaylist={saveUserPlaylist}
          />
        </div>
        <h1>{currentPlaylist.id}</h1>
        {/*  <pre>{JSON.stringify(currentPlaylist, null, 3)}</pre> */}
        <PlaylistSelector
          userPlaylists={userPlaylists}
          currentPlaylist={currentPlaylist}
          setCurrentPlaylist={setCurrentPlaylist}
        />
      </div>
    </>
  );
}

export default App;

function PlaylistSelector({ userPlaylists, setCurrentPlaylist }) {
  function selectCurrentPlaylist(selectedId) {
    let selectedPlaylist = userPlaylists.filter(
      (userPlaylist) => userPlaylist.id === Number(selectedId)
    );
    setCurrentPlaylist(...selectedPlaylist);
  }
  return (
    <select onChange={(e) => selectCurrentPlaylist(e.target.value)}>
      {userPlaylists.map((userPlaylist) => (
        <option key={userPlaylist.id} value={userPlaylist.id}>
          {userPlaylist.name}
        </option>
      ))}
    </select>
  );
}

export default PlaylistSelector;

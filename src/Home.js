import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';

function Home() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);


  // Load all songs on first load
  useEffect(() => {
    fetch("https://music-backend-0n0h.onrender.com/search?q=")
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  const searchSongs = () => {
 fetch("https://music-backend-0n0h.onrender.com/search?q=" + query)
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  return (
    <div>
    <div className="search-container">
      {/* SEARCH */}
      <button onClick={searchSongs} className="search-btn">
        Search
      </button>
      <input
      className="search-bar"
        placeholder="Search music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>

      {/* SONG LIST */}
      {songs.map((song) => (
        <div key={song.id}>
          <Link to={`/song/${song.id}`} className="music-link">
            {song.name}
          </Link>
        </div>
      ))}

      <div>
        <Link to="/info/1">info</Link>
      </div>
    </div>
  );
}

export default Home;

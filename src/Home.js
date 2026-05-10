import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';

function Home() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  // Load all songs on first load
  useEffect(() => {
    fetch("http://127.0.0.1:5000/search?q=")
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  const searchSongs = () => {
    fetch("http://127.0.0.1:5000/search?q=" + query)
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  return (
    <div>
      <h1>My Music</h1>

      {/* SEARCH */}
      <input
      className="search-bar"
        placeholder="Search music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchSongs} className="search-bar">
        Search
      </button>
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
/*
import { Link } from "react-router-dom";
import './Home.css';
const songs = [
  { id: 1, name: "CosmicShift" },
  { id: 2, name: "Ghost Circuit" },
  { id: 3, name: "Song 3" },
  { id: 4, name: "Song 0" },
];

function Home() {
  return (
    <div>
      <h1>My Music</h1>

      {songs.map((song) => (
        <div key={song.id}>
        <Link to={`/song/${song.id}`} className="music-link">
          {song.name}
        </Link>
        </div>
      ))}
      <div>
         <Link to={`/info/`}>info</Link>
      </div>
    </div>
  );
}

export default Home;
*/
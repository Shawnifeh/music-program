import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';

function Home() {

  const [query, setQuery] = useState("");

  const [songs, setSongs] = useState([]);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // LOAD SONGS

  useEffect(() => {

    fetch("https://music-backend-0n0h.onrender.com/search?q=")
      .then(res => res.json())
      .then(data => setSongs(data));

  }, []);

  // SEARCH

  const searchSongs = () => {

    fetch(
      "https://music-backend-0n0h.onrender.com/search?q=" + query
    )
      .then(res => res.json())
      .then(data => setSongs(data));

  };

  return (

    <div className="home-page">

      {/* MENU BUTTON */}

      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      {/* SIDEBAR */}

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <Link to="/">Home</Link>

        <Link to="/info/1">Info</Link>

        <Link to="/settings/1">Settings</Link>

        <Link to="/feedbackPage/">Feedback</Link>

      </div>

      <div className={`main-content ${sidebarOpen ? "shift" : ""}`}>
      {/* SEARCH */}

      <div className="search-container">

        <button
          onClick={searchSongs}
          className="search-btn"
        >
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

      <div className="songs-container">

        {songs.map((song) => (

          <div
            key={song.id}
            className="song-card"
          >

            <Link
              to={`/song/${song.id}`}
              className="music-link"
            >
              {song.name}
            </Link>

          </div>

        ))}

      </div>

    </div>
    </div>
  );
}

export default Home;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';


function Home() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // LOAD SONGS

  useEffect(() => {

    fetch("http://127.0.0.1:5000/search?q=")
      .then(res => res.json())
      .then(data => setSongs(data));

  }, []);

  // SEARCH

  const searchSongs = () => {

    fetch(
      "http://127.0.0.1:5000/search?q=" + query
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
        <MenuIcon />
      </button>

      {/* SIDEBAR */}

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon />
        </button>

<Link to="/">
   Home
</Link>

<Link to="/info/1">
   Info
</Link>

<Link to="/settings/1">
   Settings
</Link>

<Link to="/feedbackPage/">
   Feedback
</Link>

<Link to="/LoginPage/">
   LoginPage
</Link>

      </div>

      {/* SEARCH */}
<div className="nav-bar">
  <div className="search-wrapper">
  
      <div className="search-container">

        <button
          onClick={searchSongs}
          className="search-btn"
        >
          <SearchIcon />
        </button>

        <input
  className="search-bar"
  placeholder="Search music..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      searchSongs();
    }
  }}
/>

      </div>
      </div>
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
  );
}

export default Home;
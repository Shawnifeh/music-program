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
          <div className="music-link">
          <Link to={`/song/${song.id}`}>
            {song.name}
          </Link>
          </div>
        </div>
      ))}
      <div>
         <Link to={`/info/`}>info</Link>
      </div>
    </div>
  );
}

export default Home;
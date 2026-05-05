import { Link } from "react-router-dom";
const songs = [
  { id: 1, name: "CosmicShift" },
  { id: 2, name: "Song 2" },
  { id: 3, name: "Song 1" },
  { id: 4, name: "Song 4" },
];

function Home() {
  return (
    <div>
      <h1>My Music</h1>

      {songs.map((song) => (
        <div key={song.id}>
          <Link to={`/song/${song.id}`}>
            ▶ {song.name}
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
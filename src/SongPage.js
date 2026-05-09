import { useParams, Link } from "react-router-dom";
import './SongPage.css';

const songs = {
  1: { name: "CosmicShift", src: "/CosmicShift.mp3" },
  2: { name: "Ghost Circuit", src: "/Ghost Circuit.mp3" },
  3: { name: "Song 3", src: "/song3.mp3" },
  4: { name: "Song 0", src: "/Experiment_song_0.mp3" },
};

function SongPage() {
  const { id } = useParams();
  const song = songs[id];

  if (!song) {
    return <h1>error in files</h1>;
  }

  return (
    <div>
      <div  className="ui">
      <Link to="/">⬅ Back</Link>
     </div>
      <h1>{song.name}</h1>

      <audio controls autoPlay src={song.src}></audio>
    </div>
  );
}

export default SongPage;
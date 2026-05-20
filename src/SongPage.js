import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./SongPage.css";

const songs = {
  1: {
    name: "Digital Memory",
    src: "/Digital Memory.mp3",
  },
  2: {
    name: "Parallel Horizon",
    src: "/Parallel Horizon.mp3",
  },
  3: {
    name: "Ghost Circuit",
    src: "/Ghost Circuit.mp3",
  },
  4: {
    name: "CosmicShift",
    src: "/CosmicShift.mp3",
  },
  5: {
    name: "Fading Signals",
    src: "/Fading Signals.mp3",
  },
  6: {
    name: "Wistful IceCave",
    src: "/Wistful IceCave.mp3",
  },
  7: {
    name: "Afterglow",
    src: "/Afterglow.mp3",
  },
  8: {
    name: "Song 0",
    src: "/Experiment_song_0.mp3",
  },
};

function SongPage() {

  const { id } = useParams();

  const song = songs[id];

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  if (!song) {
    return <h1>Error loading song</h1>;
  }

  const togglePlay = () => {

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div>
      <div className="music-card">
      <Link to="/" className="ui">
        Back
      </Link>


        <h1 className="song-title">
          {song.name}
        </h1>

        <button
          className="play-button"
          onClick={togglePlay}
        >
          {playing ? "Pause" : "Play"}
        </button>

        <audio
          ref={audioRef}
          src={song.src}
        ></audio>

      </div>

    </div>
  );
}

export default SongPage;
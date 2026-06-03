import { useParams, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./SongPage.css";


const songs = {
  8: {
    name: "Echoes Of Yesterday",
    src: "/assets/music/Echoes Of Yesterday.mp3",
  },
  7: {
    name: "Afterglow",
    src: "/assets/music/Afterglow.mp3",
  },
  6: {
    name: "Wistful IceCave",
    src: "/assets/music/Wistful IceCave.mp3",
  },
  5: {
    name: "Fading Signals",
    src: "/assets/music/Fading Signals.mp3",
  },
  4: {
    name: "CosmicShift",
    src: "/assets/music/CosmicShift.mp3",
  },
  3: {
    name: "Ghost Circuit",
    src: "/assets/music/Ghost Circuit.mp3",
  },
  2: {
    name: "Parallel Horizon",
    src: "/assets/music/Parallel Horizon.mp3",
  },
  1: {
    name: "Digital Memory",
    src: "/assets/music/Digital Memory.mp3",
  },
  9: {
    name: "Song 0",
    src: "/assets/music/Experiment_song_0.mp3",
  },
};

function SongPage() {
  
  const { id } = useParams();

  // ✅ FIX 1: ensure correct lookup
  const song = songs[Number(id)];

  console.log("URL ID:", id);
console.log("Song loaded:", song);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // ✅ FIX 2: reset audio properly when song changes
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.load();
    setPlaying(false);
  }, [id]);

  if (!song) {
    return <h1>Error loading song</h1>;
  }

  // ✅ FIX 3: safer play/pause handling
  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setPlaying(!playing);
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  return (
    <div className="music-card">
      <Link to="/" className="ui">
        Back
      </Link>

      <h1 className="song-title">{song.name}</h1>

      <button className="play-button" onClick={togglePlay}>
        {playing ? "Pause" : "Play"}
      </button>

      {/* IMPORTANT: key forces correct reload */}
      <audio
        key={id}
        ref={audioRef}
        src={song.src}
      />
    </div>
  );
}

export default SongPage;


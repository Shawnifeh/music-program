import { useParams, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./SongPage.css";
import Waveform from "./Waveform";


const songs = [
  {
    id: 9,
    order: 1,
    name: "Digital Memory",
    src: "/assets/music/Digital Memory.mp3",
  },  
  {
    id: 8,
    order: 2,
    name: "Parallel Horizon",
    src: "/assets/music/Parallel Horizon.mp3",
  },
  {
    id: 7,
    order: 3,
    name: "Ghost Circuit",
    src: "/assets/music/Ghost Circuit.mp3",
  },
  {
    id: 6,
    order: 4,
    name: "CosmicShift",
    src: "/assets/music/CosmicShift.mp3",
  },  
  {
    id: 5,
    order: 5,
    name: "Fading Signals",
    src: "/assets/music/Fading Signals.mp3",
  },
  {
    id: 4,
    order: 6,
    name: "Wistful IceCave",
    src: "/assets/music/Wistful IceCave.mp3",
  },
  {
    id: 3,
    order: 7,
    name: "Afterglow",
    src: "/assets/music/Afterglow.mp3",
  },
  {
    id: 2,
    order: 8,
    name: "Echoes Of Yesterday",
    src: "/assets/music/Echoes Of Yesterday.mp3",
  },
  {
    id: 1,
    order: 9,
    name: "Song 0",
    src: "/assets/music/Experiment_song_0.mp3",
  },
];

function SongPage() {
  const { id } = useParams()

  const song = songs.find(s => s.id === Number(id));
  // ✅ FIXED LOOKUP

  console.log("URL ID:", id);
  console.log("Song loaded:", song);
  console.log("==== DEBUG ====");
  console.log("Parsed Number:", Number(id));
  console.log("All songs:", songs);
  console.log("Match:", songs.find((s) => s.id === Number(id)));
  console.log("RAW ID:", id);
  console.log("TYPE:", typeof id);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [audioData, setAudioData] = useState({
  volume: 0,
  beat: false
});

useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  const updateTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const loadedMetadata = () => {
    setDuration(audio.duration);
  };

  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", loadedMetadata);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", loadedMetadata);
  };
}, []);

useEffect(() => {
  const interval = setInterval(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8080/stream");
      const data = await res.json();
      setAudioData(data);
    } catch (err) {
      console.log("Rust stream error:", err);
    }
  }, 100);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  }, [id]);

  if (!song) {
    return <h1>Error loading song</h1>;
  }
  const handleSeek = (e) => {
  const value = Number(e.target.value);

  audioRef.current.currentTime = value;
  setCurrentTime(value);
};
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

  const togglePlay = async () => {
  if (!audioRef.current) return;

  if (playing) {
    audioRef.current.pause();
  } else {
    await audioRef.current.play();
  }

  setPlaying(!playing);
};

  return (
    <div className="music-card">
      <Link to="/" className="ui">Back</Link>

      <h1 className="song-title">{song.name}</h1>

      <button className="play-button" onClick={togglePlay}>
        {playing ? "Pause" : "Play"}
      </button>

      <audio
        ref={audioRef}
        src={song.src}
      />
      <div className="progress-container">
  <span>{formatTime(duration)}</span>

  <input
    type="range"
    min="0"
    max={duration || 0}
    value={currentTime}
    onChange={handleSeek}
    className="progress-bar"
  />

  <span>{formatTime(duration)}</span>
</div>

    </div>
  );
}

export default SongPage;
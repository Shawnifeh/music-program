/*
import { useEffect, useRef } from "react";

export default function Waveform({ audioRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current) return;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    const source = audioCtx.createMediaElementSource(audioRef.current);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bufferLength;

      for (let i = 0; i < bufferLength; i++) {
        const height = (dataArray[i] / 255) * canvas.height;

        ctx.fillStyle = "#1db954";

        ctx.fillRect(
          i * barWidth,
          canvas.height - height,
          barWidth - 1,
          height
        );
      }
    };

    draw();

    const resumeAudio = async () => {
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }
    };

    audioRef.current.addEventListener("play", resumeAudio);

    return () => {
      audioRef.current?.removeEventListener("play", resumeAudio);
      audioCtx.close();
    };
  }, [audioRef]);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={150}
      style={{
        display: "block",
        margin: "20px auto",
        background: "#111",
        borderRadius: "10px",
      }}
    />
  );
}
  */
import React, { useEffect, useRef, useState } from "react";

export default function Sounds(){
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const ctxRef = useRef<AudioContext|null>(null);
  const oscRef = useRef<OscillatorNode|null>(null);
  const gainRef = useRef<GainNode|null>(null);

  useEffect(()=> {
    return ()=> {
      if (oscRef.current) { oscRef.current.stop(); oscRef.current.disconnect(); }
      if (gainRef.current) gainRef.current.disconnect();
    };
  }, []);

  const start = async () => {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = ctxRef.current!;
    gainRef.current = ctx.createGain(); gainRef.current.gain.value = volume;
    oscRef.current = ctx.createOscillator();
    oscRef.current.type = "sine"; oscRef.current.frequency.value = 200;
    oscRef.current.connect(gainRef.current); gainRef.current.connect(ctx.destination);
    oscRef.current.start();
    setPlaying(true);
  };

  const stop = () => {
    if (oscRef.current) { oscRef.current.stop(); oscRef.current.disconnect(); }
    if (gainRef.current) gainRef.current.disconnect();
    oscRef.current = null; gainRef.current = null;
    setPlaying(false);
  };

  useEffect(()=> { if (gainRef.current) gainRef.current.gain.value = volume; }, [volume]);

  return (
    <div>
      <h2 className="font-semibold">Hintergrund‑Geräusche</h2>
      <div className="mt-2 flex items-center gap-2">
        <button className={`btn ${playing? 'btn-soft':'btn-primary'}`} onClick={playing ? stop : start}>{playing ? "Stop" : "Play"}</button>
        <input type="range" min={0} max={1} step={0.01} value={volume} onChange={e=>setVolume(Number(e.target.value))} />
      </div>
      <div className="text-sm text-gray-600 mt-2">Einfacher Ton als Platzhalter (kein Datei‑Upload).</div>
    </div>
  );
}

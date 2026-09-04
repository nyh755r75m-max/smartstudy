import React, { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(()=>{ if(running){
    if (remaining <= 0) setRemaining(minutes*60);
    intervalRef.current = setInterval(()=> setRemaining(r => r-1), 1000);
    return ()=> clearInterval(intervalRef.current);
  } else {
    clearInterval(intervalRef.current);
  }}, [running, minutes]);

  useEffect(()=>{ if (remaining<=0 && running) setRunning(false); }, [remaining, running]);

  const display = `${String(Math.floor(Math.max(0, remaining)/60)).padStart(2,"0")}:${String(Math.max(0, remaining)%60).padStart(2,"0")}`;

  return (
    <div>
      <h2 className="font-semibold">Lern‑Timer</h2>
      <div className="mt-2 flex items-center gap-2">
        <input type="number" className="p-1 w-20 border rounded" value={minutes} onChange={e=>setMinutes(Number(e.target.value))} /> Min
        <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={()=>setRunning(!running)}>{running ? "Stop" : "Start"}</button>
        <button className="px-2 py-1 border rounded" onClick={()=>{ setRunning(false); setRemaining(0); }}>Reset</button>
      </div>
      <div className="mt-3 text-2xl font-mono">{display}</div>
    </div>
  );
}

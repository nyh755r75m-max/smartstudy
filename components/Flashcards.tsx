import React, { useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export default function Flashcards() {
  const [cards, setCards] = useLocalStorage<{q:string,a:string,id:number}[]>("smartstudy:cards", [
    { id: 1, q: "2+2?", a: "4" },
  ]);
  const [q,setQ] = useState(""); const [a,setA]=useState("");
  const [index, setIndex] = useState(0);
  const add = () => { if(!q||!a) return; setCards([...cards, {id:Date.now(),q,a}]); setQ(""); setA(""); };

  return (
    <div>
      <h2 className="font-semibold">Karteikarten</h2>
      <div className="mt-2">
        <div className="flex gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} className="input flex-1" placeholder="Frage" />
          <input value={a} onChange={e=>setA(e.target.value)} className="input flex-1" placeholder="Antwort" />
          <button className="btn btn-primary" onClick={add}>Hinzufügen</button>
        </div>
        {cards.length>0 ? (
          <div className="mt-3 p-3 rounded border" style={{background:'rgba(255,255,255,0.6)'}}>
            <div className="font-medium">Frage:</div>
            <div>{cards[index].q}</div>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-gray-600">Antwort anzeigen</summary>
              <div className="mt-1">{cards[index].a}</div>
            </details>
            <div className="flex gap-2 mt-2">
              <button className="btn btn-soft" onClick={()=>setIndex((index-1+cards.length)%cards.length)}>Zurück</button>
              <button className="btn btn-soft" onClick={()=>setIndex((index+1)%cards.length)}>Nächste</button>
            </div>
          </div>
        ) : <div className="mt-3 text-sm text-gray-500">Keine Karten</div>}
      </div>
    </div>
  );
}

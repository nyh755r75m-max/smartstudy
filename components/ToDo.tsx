import React, { useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export default function ToDo() {
  const [items, setItems] = useLocalStorage<{id:number,text:string,done:boolean}[]>("smartstudy:todos", []);
  const [text, setText] = useState("");

  const add = () => {
    if (!text.trim()) return;
    setItems([...items, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };
  const toggle = (id:number) => setItems(items.map(i => i.id===id? {...i,done:!i.done}: i));
  const del = (id:number) => setItems(items.filter(i=>i.id!==id));

  return (
    <div>
      <h2 className="font-semibold">To‑Do / Lernplan</h2>
      <div className="flex gap-2 mt-2">
        <input className="flex-1 input" value={text} onChange={e=>setText(e.target.value)} placeholder="Neue Aufgabe" />
        <button className="btn btn-primary" onClick={add}>+</button>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map(i=>(
          <li key={i.id} className="flex items-center justify-between">
            <label className={`flex items-center gap-2 ${i.done ? "line-through text-gray-400" : ""}`}>
              <input type="checkbox" checked={i.done} onChange={()=>toggle(i.id)} />
              <span>{i.text}</span>
            </label>
            <button className="text-red-500" onClick={()=>del(i.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

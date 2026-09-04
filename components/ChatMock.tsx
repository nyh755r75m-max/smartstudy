import React, { useState } from "react";

export default function ChatMock(){
  const [messages, setMessages] = useState<{from:"user"|"bot", text:string}[]>([
    { from: "bot", text: "Hallo — ich bin dein Lern‑Bot. Frag mich etwas!"}
  ]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    const userMsg = {from:"user" as const, text: text.trim()};
    setMessages(m=>[...m, userMsg]);
    setText("");
    // Mock response (simple transformation)
    setTimeout(()=> {
      const bot = { from: "bot" as const, text: "Mock‑Antwort: " + userMsg.text.split("").reverse().join("").slice(0,200) };
      setMessages(m=>[...m, bot]);
    }, 600);
  };

  return (
    <div>
      <h2 className="font-semibold">KI‑Chat (Mock)</h2>
      <div className="mt-2 p-2 border rounded h-40 overflow-auto bg-white">
        {messages.map((m,i)=>(
          <div key={i} className={`mb-2 ${m.from==="bot" ? "text-left" : "text-right"}`}>
            <div className={`inline-block px-2 py-1 rounded ${m.from==="bot" ? "bg-gray-100" : "bg-blue-200"}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input className="flex-1 p-1 border rounded" value={text} onChange={e=>setText(e.target.value)} placeholder="Frage an Bot" />
        <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={send}>Senden</button>
      </div>
    </div>
  );
}

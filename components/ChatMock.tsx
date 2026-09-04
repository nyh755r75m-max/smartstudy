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
      <div className="mt-2 p-2 rounded h-40 overflow-auto" style={{background:'rgba(255,255,255,0.6)'}}>
        {messages.map((m,i)=>(
          <div key={i} className={`mb-2 ${m.from==="bot" ? "text-left" : "text-right"}`}>
            <div className={m.from==="bot"? 'chat-bot' : 'chat-user'}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <input className="input flex-1" value={text} onChange={e=>setText(e.target.value)} placeholder="Frage an Bot" />
        <button className="btn btn-primary" onClick={send}>Senden</button>
      </div>
    </div>
  );
}

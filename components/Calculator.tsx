import React, { useState } from "react";

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [res, setRes] = useState<string>("");

  const calc = () => {
    try {
      // very simple evaluator (restricted)
      // eslint-disable-next-line no-eval
      const v = eval(expr);
      setRes(String(v));
    } catch {
      setRes("Fehler");
    }
  };

  return (
    <div>
      <h2 className="font-semibold">Taschenrechner</h2>
      <div className="mt-2 flex gap-2">
        <input className="p-1 border rounded flex-1" value={expr} onChange={e=>setExpr(e.target.value)} placeholder="z.B. 12*(3+4)" />
        <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={calc}>=</button>
      </div>
      <div className="mt-2">Ergebnis: <span className="font-mono">{res}</span></div>
    </div>
  );
}

import Head from "next/head";
import ToDo from "../components/ToDo";
import Flashcards from "../components/Flashcards";
import Timer from "../components/Timer";
import Calculator from "../components/Calculator";
import Sounds from "../components/Sounds";
import ChatMock from "../components/ChatMock";
import { useTheme } from "../components/ThemeProvider";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>smartstudy</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl header-title">smartstudy</h1>
          <div className="flex gap-2">
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="input">
              <option value="blue">Pastell Blau</option>
              <option value="green">Pastell Grün</option>
              <option value="purple">Pastell Lila</option>
              <option value="dark">Dunkel</option>
            </select>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="card"><ToDo/></section>
          <section className="card"><Flashcards/></section>
          <section className="card"><Timer/></section>
          <section className="card"><Calculator/></section>
          <section className="card"><Sounds/></section>
          <section className="card"><ChatMock/></section>
        </main>
      </div>
    </>
  );
}

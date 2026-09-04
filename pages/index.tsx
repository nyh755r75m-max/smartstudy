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
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">smartstudy</h1>
          <div className="flex gap-2">
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="p-1 rounded border">
              <option value="blue">Blau</option>
              <option value="green">Grün</option>
              <option value="purple">Lila</option>
              <option value="dark">Dunkel</option>
            </select>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="p-4 bg-white rounded shadow"><ToDo/></section>
          <section className="p-4 bg-white rounded shadow"><Flashcards/></section>
          <section className="p-4 bg-white rounded shadow"><Timer/></section>
          <section className="p-4 bg-white rounded shadow"><Calculator/></section>
          <section className="p-4 bg-white rounded shadow"><Sounds/></section>
          <section className="p-4 bg-white rounded shadow"><ChatMock/></section>
        </main>
      </div>
    </>
  );
}

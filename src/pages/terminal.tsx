import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/navbar";
import { SetStateAction, useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState("");
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setInput(event.target.value);
  }
  return (
    <>
      <Head>
        <title>Terminal - wiktrek.xyz</title>
        <meta name="description" content="info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="left-10">
        <Navbar />
        <div className="text-emerald-500">
          <a className="text-orange-500">guest</a>
          <a className="text-yellow-500">@</a>
          <a className="text-green-600">info.wiktrek.xyz</a>
          <a className="text-yellow-500">:$ ~</a>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="border-none bg-transparent focus:ring-0"
          />
        </div>
        <div>
          <a>{input}</a>
        </div>
      </main>
    </>
  );
};

export default Home;

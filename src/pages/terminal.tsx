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

      <main>
        <Navbar />
        <div className="text-emerald-500">
          <a>test</a>
          <input type="text" value={input} onChange={handleChange} />
          <input className="border-none bg-transparent focus:border-none active:border-none" />
        </div>
      </main>
    </>
  );
};

export default Home;

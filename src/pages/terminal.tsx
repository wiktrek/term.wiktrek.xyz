import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "./components/navbar";
import { useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState("");
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
          <input className="border-none bg-transparent focus:border-none active:border-none" />
        </div>
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "./components/navbar";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Info - wiktrek.xyz</title>
        <meta name="description" content="info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div>
          <a>Projects:</a>
        </div>

        <div>
          <a href="https://wiktrek.xyz" target="_blank" rel="noreferrer">
            wiktrek.xyz
          </a>
        </div>

        <div>
          <a>Hi</a>
        </div>
      </main>
    </>
  );
};

export default Home;

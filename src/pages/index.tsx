import type { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState("");
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setInput(event.target.value);
  }
  const [response, setResponse] = useState(["help"]);

  function checkcommand() {
    let amount = 0;
    response.map(() => {
      amount++;
      return amount;
    });
    if (amount === 10) setResponse(["help"]);
    // const commands = "./data.json";
    // if (!commands) return;
    if (input === "") return;

    if (input !== "help") {
      setResponse([...response, `Command not found: ${input}. Try 'help`]);

      setInput("");
    }
    return;
    setResponse([...response, input]);
    setInput("");
  }
  return (
    <>
      <Head>
        <title>Terminal - wiktrek.xyz</title>
        <meta name="description" content="info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pl-5">
        <div>
          {response.map((r, index) => {
            return (
              <div key={index}>
                <a className="text-orange-500">guest</a>
                <a className="text-yellow-500">@</a>
                <a className="text-green-600">info.wiktrek.xyz</a>
                <a className="text-yellow-500">:$ ~ </a>
                <a className="text-emerald-500">{r}</a>
              </div>
            );
          })}
        </div>
        <div className="text-emerald-500">
          <a className="text-orange-500">guest</a>
          <a className="text-yellow-500">@</a>
          <a className="text-green-600">info.wiktrek.xyz</a>
          <a className="text-yellow-500">:$ ~ </a>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="border-none bg-transparent focus:outline-none focus:ring-0"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                checkcommand();
              }
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;

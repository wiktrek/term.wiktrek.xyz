import type { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState("");
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    response.map(() => {
      amount++;
      console.log(amount);
      return amount;
    });
    if (amount > 10) setResponse(["Try 'help'"]);
    setInput(event.target.value);
  }
  const [response, setResponse] = useState(["Try 'help'"]);
  let amount = 0;
  let commandResponse = "";
  const commands = ["help", "clear", "website"];
  function checkcommand() {
    if (!commands.includes(input)) {
      setInput("");
      setResponse([...response, `Command not found: ${input}. Try 'help`]);
      return;
    }

    if (input === "help") {
      commandResponse = commands.toString();
      console.log(commandResponse);
    }
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

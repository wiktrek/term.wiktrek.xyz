import type { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useState } from "react";
const Home: NextPage = () => {
  const [input, setInput] = useState("");
  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    response.map(() => {
      amount++;
      return amount;
    });
    if (amount > 10) setResponse(["Try 'help'"]);
    setInput(event.target.value);
  }
  const [response, setResponse] = useState(["Try 'help'"]);
  let amount = 0;
  const commands = [
    "help",
    "clear",
    "website",
    "links",
    "github",
    "repo",
    "projects",
    "yt",
    "ig",
  ];
  function checkcommand() {
    if (!commands.includes(input)) {
      setInput("");
      setResponse([...response, `Command not found: ${input}. Try 'help'`]);
      return;
    }
    if (input === "clear") {
      setResponse(["Try 'help'"]);
      setInput("");
      return;
    }
    setResponse([...response, input]);
    setInput("");
  }
  const cmd = [
    { cmd: "help", value: `${commands.toString()}`, link: false },
    { cmd: "website", value: "https://wiktrek.xyz", link: true },
    { cmd: "links", value: "https://link.wiktrek.xyz", link: true },
    { cmd: "github", value: "https://github.com/wiktrek", link: true },
    {
      cmd: "repo",
      value: "https://github.com/wiktrek/term.wiktrek.xyz",
      link: true,
    },
    { cmd: "projects", value: "https://wiktrek.xyz/projects", link: true },
    { cmd: "yt", value: "https://link.wiktrek.xyz/yt", link: true },
    { cmd: "ig", value: "https://link.wiktrek.xyz/ig", link: true },
  ];
  return (
    <>
      <Head>
        <title>Terminal - wiktrek.xyz</title>
        <meta name="description" content="info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pl-5 text-2xl">
        <div>
          {response.map((r, index) => {
            return (
              <div key={index}>
                <a className="text-orange-500">guest</a>
                <a className="text-yellow-500">@</a>
                <a className="text-green-600">info.wiktrek.xyz</a>
                <a className="text-yellow-500">:$ ~ </a>
                <a className="text-emerald-500">{r}</a>
                {cmd.map((c) => {
                  if (c.cmd !== r) return <p></p>;
                  if (c.link === true)
                    return (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-500"
                        href={c.value}
                      >
                        {c.value}
                      </a>
                    );
                  console.log("test");
                  return (
                    <p key={index} className="text-yellow-500">
                      {c.value}
                    </p>
                  );
                })}
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

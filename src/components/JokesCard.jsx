import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";

const JokesCard = () => {
  const [loader, setLoader] = useState(false);
  const [jokes, setJokes] = useState({
    setup: "",
    delivery: "",
  });
  const emojis = ["😂", "🤣", "😅", "😆"];
  const getJokes = async () => {
    setLoader(true);
    const joke = await fetch(
      `https://v2.jokeapi.dev/joke/any?safe-mode&type=twopart`
    );
    const jokes = await joke.json();
    setJokes({
      setup: jokes.setup,
      delivery: jokes.delivery,
    });
    setLoader(false);
  };
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <>
      {!loader ? (
        <>
          <h2 className="setup font-500 ">{jokes.setup ? jokes.setup : ""}</h2>
          <h1 className="delivery font-700">
            {jokes.delivery
              ? jokes.delivery + emojis[Math.floor(Math.random() * 4)]
              : ""}
          </h1>
          <button className="btn" onClick={getJokes}>
            Tell Me Another!
          </button>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default JokesCard;

import React, { useEffect, useState } from "react";

import Meme from "/.meme";

export default function App() {
  const [memes, setMemes] = useState([]);

  const renderMemes = () => {
    return memes.map((meme) => {
      return <Meme key={meme.id} meme={meme} />;
    });
  };

  const getMemes = () => {
    fetch("http://localhost:5000/memes")
      .then((res) => res.json())
      .then((data) => setMemes(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMemes();
  }, []);

  return <div className="app">{renderMemes()}</div>;
}

import React, { useEffect, useState } from "react";
import axios from "axios";

import Meme from "./meme";

export default function App() {
  const [memes, setMemes] = useState([]);

  const deleteMeme = (id) => {
    axios
      .delete(`http://localhost:5000/delete-meme/${id}`)
      .then(setMemes(memes.filter((meme) => meme.id !== id)))
      .catch((err) => console.log("Delete meme err:", err));
  };

  const renderMemes = () => {
    return memes.map((meme) => {
      return <Meme key={meme.id} meme={meme} deleteMeme={deleteMeme} />;
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

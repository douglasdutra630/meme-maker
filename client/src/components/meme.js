import React from "react";

const Meme = (props) => {
  const { id, text, image, favorite } = props.meme;
  return (
    <div key={id} className="meme">
      <div className="img-wrapper">
        <img className="meme-img" src={image} alt="funny-image" />
      </div>
      <p>{text}</p>
      {favorite ? (
        <img
          src="https://library.kissclipart.com/20180830/fuw/kissclipart-twinkle-little-star-clip-art-clipart-twinkle-twin-0d72b7a5dc286d1e.jpg"
          alt="star"
        />
      ) : null}
      )}
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default Meme;

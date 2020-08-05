import React, { useState, useEffect } from "react";
import "./style/style.css";
import axios from "axios";

function BigPokemonCard({
  name,
  id,
  type,
  abilities,
  height,
  weight,
  moves,
  image,
  altImage,
  altImage2,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  closeCard,
}) {
  const [finalImage, setFinalImage] = useState("");
  const otherImage = (e) => {
    if (altImage !== null) {
      e.target.src = altImage;
    } else if (finalImage != null) {
      e.target.src = finalImage;
    }
  };

  useEffect(() => {
    axios.get(altImage2).then((res) => {
      setFinalImage(res.data.sprites.front_default);
    });
  }, [altImage2]);

  //Make a drop down list for the pokemon moves data.
  return (
    <div className="bigCard" onClick={closeCard}>
      <h1>{`#${id} ${name}`}</h1>
      <div className="details">
        <div className="smallDetails">
          <img src={image} onError={otherImage} alt="Pokemon not found"></img>
          <p>Type: {type}</p>
          <p>Abilities: {abilities}</p>
          <p>
            Height: {height * 10}cm Weight: {weight / 10}kg
          </p>
        </div>
        <div className="stats">
          <p>Bast Stats:</p>
          <p>Hp: {hp}</p>
          <p>Attack: {attack}</p>
          <p>Special Attack: {specialAttack}</p>
          <p>Defense: {defense}</p>
          <p>Special Defense: {specialDefense}</p>
          <p>Speed: {speed}</p>
        </div>
      </div>
    </div>
  );
}

export default BigPokemonCard;

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
  const [defaultImage, setDefaultImage] = useState();

  useEffect(() => {
    if (id > 807) {
      if (altImage !== null) {
        setDefaultImage(altImage);
      } else {
        axios.get(altImage2).then((res) => {
          if (res.data.sprites.front_default !== null) {
            setDefaultImage(res.data.sprites.front_default);
          }
        });
      }
    } else {
      setDefaultImage(image);
    }
  }, [id]);

  //Make a drop down list for the pokemon moves data.
  return (
    <div className="bigCard" onClick={closeCard}>
      <h1>{`#${id} ${name}`}</h1>
      <div className="details">
        <div className="smallDetails">
          <img src={defaultImage} alt="Pokemon not found"></img>
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

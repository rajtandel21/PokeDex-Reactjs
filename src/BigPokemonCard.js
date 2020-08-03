import React from "react";
import "./style/style.css";

function BigPokemonCard({
  name,
  id,
  type,
  abilities,
  height,
  weight,
  moves,
  image,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  closeCard,
}) {
  //Make a drop down list for the pokemon moves data.
  return (
    <div className="bigCard" onClick={closeCard}>
      <h1>{`#${id} ${name}`}</h1>
      <div className="details">
        <div className="smallDetails">
          <img src={image} alt="Pokemon not found"></img>
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

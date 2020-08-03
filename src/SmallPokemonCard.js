import React, { useState } from "react";
import "./style/style.css";

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function SmallPokemonCard({
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
  openDetails,
}) {
  return (
    <div>
      <div className="smallCard" onClick={openDetails}>
        <p className="smallCardName">{`#${id} ${name}`}</p>
        <img src={image} alt={`Could not get ${name}`}></img>
        <p className="type">{type}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

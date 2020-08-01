import React from "react";
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
}) {
  return (
    <div className="smallCard">
      <p className="smallCardName">{`#${id} ${name}`}</p>
      <img src={image}></img>
      <p>{type}</p>
    </div>
  );
}

export default SmallPokemonCard;

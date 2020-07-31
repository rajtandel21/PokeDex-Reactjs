import React from "react";

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
    <div>
      <p>{name}</p>
      <img src={image}></img>
    </div>
  );
}

export default SmallPokemonCard;

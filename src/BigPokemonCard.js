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
  return (
    <div className="bigCard" onClick={closeCard}>
      {name}
    </div>
  );
}

export default BigPokemonCard;

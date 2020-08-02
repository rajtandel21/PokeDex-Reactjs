import React, { useState } from "react";
import "./style/style.css";
import BigPokemonCard from "./BigPokemonCard";

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
  const [card, showCard] = useState(false);
  const openDetails = () => {
    showCard(true);
  };
  const closeCard = () => {
    showCard(false);
  };

  return (
    <div>
      {card ? (
        <BigPokemonCard
          name={name}
          id={id}
          type={type}
          abilities={abilities}
          height={height}
          weight={weight}
          moves={moves}
          image={image}
          hp={hp}
          attack={attack}
          defense={defense}
          specialAttack={specialAttack}
          specialDefense={specialDefense}
          speed={speed}
          closeCard={closeCard}
        />
      ) : null}
      <div className="smallCard" onClick={openDetails}>
        <p className="smallCardName">{`#${id} ${name}`}</p>
        <img src={image} alt={`Could not get ${name}`}></img>
        <p className="type">{type}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

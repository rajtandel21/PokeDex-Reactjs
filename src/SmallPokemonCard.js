import React from "react";
import "./style/style.css";

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function SmallPokemonCard(props) {
  const otherImage = (e) => {
    e.target.src = props.altImage;
  };
  return (
    <div>
      <div className="smallCard" onClick={() => props.openDetails(props)}>
        <p className="smallCardName">{`#${props.id} ${props.name}`}</p>
        <img
          src={props.image}
          onError={otherImage}
          alt={`Could Not Get ${props.name}`}
        ></img>
        <p className="type">{props.type}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

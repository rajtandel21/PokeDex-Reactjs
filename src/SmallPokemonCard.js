import React, { useState } from "react";
import "./style/style.css";
import axios from "axios";

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function SmallPokemonCard(props) {
  const [finalImage, setFinalImage] = useState("");
  const otherImage = (e) => {
    if (props.altImage !== null) {
      e.target.src = props.altImage;
    } else {
      axios.get(props.altImage2).then((res) => {
        setFinalImage(res.data.sprites.front_default);
      });
      if (finalImage != null) {
        e.target.src = finalImage;
      }
    }
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

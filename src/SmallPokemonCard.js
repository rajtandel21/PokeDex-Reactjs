import React, { useState, useEffect } from "react";
import "./style/style.css";
import axios from "axios";

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function SmallPokemonCard(props) {
  const [defaultImage, setDefaultImage] = useState();
  useEffect(() => {
    if (props.id > 893) {
      if (props.altImage !== null) {
        setDefaultImage(props.altImage);
      } else if (props.altImage2 !== null) {
        axios.get(props.altImage2).then((res) => {
          if (res.data.sprites.front_default !== null) {
            setDefaultImage(res.data.sprites.front_default);
          }
        });
      } else setDefaultImage("./styles/Pokeball.png");
    } else {
      setDefaultImage(props.image);
    }
  }, [props]);
  return (
    <div>
      <div className="smallCard" onClick={() => props.openDetails(props)}>
        <p className="smallCardName">{`#${props.id} ${props.name}`}</p>
        <img src={defaultImage} alt={`Could Not Get ${props.name}`}></img>
        <p className="type">{props.type.join(", ")}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

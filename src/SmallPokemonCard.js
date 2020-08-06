import React, { useState, useEffect } from "react";
import "./style/style.css";
import axios from "axios";

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function SmallPokemonCard(props) {
  const [defaultImage, setDefaultImage] = useState();
  useEffect(() => {
    if (props.id > 807) {
      if (props.altImage !== null) {
        setDefaultImage(props.altImage);
      } else {
        axios.get(props.altImage2).then((res) => {
          if (res.data.sprites.front_default !== null) {
            setDefaultImage(res.data.sprites.front_default);
          }
        });
      }
    } else {
      setDefaultImage(props.image);
    }
  }, [props]);
  return (
    <div>
      <div className="smallCard" onClick={() => props.openDetails(props)}>
        <p className="smallCardName">{`#${props.id} ${props.name}`}</p>
        <img src={defaultImage} alt={`Could Not Get ${props.name}`}></img>
        <p className="type">{props.type}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

import React, { useState, useEffect } from "react";
import "./style/style.css";
import { imageSelect } from "./reuseFunctions";

function SmallPokemonCard(props) {
  const [defaultImage, setDefaultImage] = useState();
  useEffect(() => {
    setDefaultImage(
      imageSelect(props.id, props.image, props.altImage, props.altImage2)
    );
  }, [props.id]);
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

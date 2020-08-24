import React, { useState, useEffect } from "react";
import "./style/style.css";
import { imageSelect, typeColor } from "./reuseFunctions";

function SmallPokemonCard(props) {
  const [defaultImage, setDefaultImage] = useState();
  useEffect(() => {
    setDefaultImage(
      imageSelect(props.id, props.image, props.altImage, props.altImage2)
    );
  }, [props]);

  const typeBackgroundColor = () => {
    let eachType = props.type.map((type, index) => {
      return (
        <span
          key={props.id + (index + 1)}
          style={{ backgroundColor: typeColor[`${type}`] }}
        >
          {type}
        </span>
      );
    });
    return eachType;
  };

  return (
    <div>
      <div className="smallCard" onClick={() => props.openDetails(props)}>
        <p className="smallCardName">{`#${props.id} ${props.name}`}</p>
        <img src={defaultImage} alt={`Could Not Get ${props.name}`}></img>
        <p className="type">{typeBackgroundColor()}</p>
      </div>
    </div>
  );
}

export default SmallPokemonCard;

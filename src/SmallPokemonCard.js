import React, { useState, useEffect } from "react";
import "./style/style.css";
import { typeColor } from "./reuseFunctions";
import axios from "axios";

function SmallPokemonCard(props) {
  const [defaultImage, setDefaultImage] = useState();

  useEffect(() => {
    if (props.image === undefined) {
      axios.get(props.altImage).then((res) => {
        if (res.data.sprites.front_default !== null) {
          setDefaultImage(res.data.sprites.front_default);
        }
      });
    } else setDefaultImage(props.image);
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

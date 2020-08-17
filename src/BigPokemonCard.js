import React, { useState, useEffect } from "react";
import "./style/style.css";
import axios from "axios";

function BigPokemonCard({
  name,
  id,
  type,
  abilities,
  height,
  weight,
  moves,
  image,
  altImage,
  altImage2,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  closeCard,
}) {
  const [defaultImage, setDefaultImage] = useState();

  const bigStyle = {
    width: (attack / 255) * 100,
    backgroundColor: "#4caf50",
  };

  useEffect(() => {
    if (id > 807) {
      if (altImage !== null) {
        setDefaultImage(altImage);
      } else {
        axios.get(altImage2).then((res) => {
          if (res.data.sprites.front_default !== null) {
            setDefaultImage(res.data.sprites.front_default);
          }
        });
      }
    } else {
      setDefaultImage(image);
    }
  }, [id]);

  //Make a drop down list for the pokemon moves data.
  return (
    <div className="bigCard" onClick={closeCard}>
      <div className="details">
        <div className="smallDetails">
          <img src={defaultImage} alt="Pokemon not found"></img>
          <h1>{`#${id} ${name}`}</h1>
          <p>Type: {type}</p>
        </div>

        <div className="stats">
          <p>Base Stats</p>
          <p>Hp: {hp}</p>
          <div className="statsBar">
            <div className="statsPercentage hp"></div>
          </div>
          <p>Attack: {attack}</p>
          <div className="statsBar">
            <div className="statsPercentage attack" style={bigStyle}></div>
          </div>
          <p>Special Attack: {specialAttack}</p>
          <div className="statsBar">
            <div className="statsPercentage spAttack"></div>
          </div>
          <p>Defense: {defense}</p>
          <div className="statsBar">
            <div className="statsPercentage defense"></div>
          </div>
          <p>Special Defense: {specialDefense}</p>
          <div className="statsBar">
            <div className="statsPercentage spDefense"></div>
          </div>
          <p>Speed: {speed}</p>
          <div className="statsBar">
            <div className="statsPercentage speed"></div>
          </div>
          <p>Abilities: {abilities}</p>
          <p>
            Height: {height * 10}cm Weight: {weight / 10}kg
          </p>
        </div>
      </div>
      <span>&#10060;</span>
    </div>
  );
}

export default BigPokemonCard;

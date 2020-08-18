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

  const typeColor = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#f56935",
    grass: "#5C9836",
    water: "#5cabc0",
    electric: "#E5BD1D",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  const bigStyle = {
    hp: {
      width: `${(hp / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    attack: {
      width: `${(attack / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    specialAttack: {
      width: `${(specialAttack / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    defense: {
      width: `${(defense / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    specialDefense: {
      width: `${(specialDefense / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    speed: {
      width: `${(speed / 255) * 100}%`,
      backgroundColor: "#4caf50",
    },
    backgroundColor: {
      backgroundColor: typeColor[`${type[0]}`],
    },
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
    <div className="bigCard" style={bigStyle.backgroundColor}>
      <span onClick={closeCard}>&#10060;</span>
      <div className="details">
        <div className="smallDetails">
          <img src={defaultImage} alt="Pokemon not found"></img>
          <h1>{`#${id} ${name}`}</h1>
          <p>Type: {type.join(" ,")}</p>
        </div>

        <div className="stats">
          <p>Base Stats</p>
          <p>Hp: {hp}</p>
          <div className="statsBar">
            <div className="statsPercentage" style={bigStyle.hp}></div>
          </div>
          <p>Attack: {attack}</p>
          <div className="statsBar">
            <div className="statsPercentage" style={bigStyle.attack}></div>
          </div>
          <p>Special Attack: {specialAttack}</p>
          <div className="statsBar">
            <div
              className="statsPercentage"
              style={bigStyle.specialAttack}
            ></div>
          </div>
          <p>Defense: {defense}</p>
          <div className="statsBar">
            <div className="statsPercentage" style={bigStyle.defense}></div>
          </div>
          <p>Special Defense: {specialDefense}</p>
          <div className="statsBar">
            <div
              className="statsPercentage"
              style={bigStyle.specialDefense}
            ></div>
          </div>
          <p>Speed: {speed}</p>
          <div className="statsBar">
            <div className="statsPercentage" style={bigStyle.speed}></div>
          </div>
          <p>Abilities: {abilities}</p>
          <p>
            Height: {height * 10}cm Weight: {weight / 10}kg
          </p>
        </div>
      </div>
    </div>
  );
}

export default BigPokemonCard;

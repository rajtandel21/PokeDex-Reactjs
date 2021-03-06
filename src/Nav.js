import React, { useState } from "react";
import "./style/style.css";
import axios from "axios";
import { imageSelect } from "./reuseFunctions";

function Nav({
  nextBtn,
  previousBtn,
  rangeList,
  openDetails,
  ImageUrl,
  closeCard,
}) {
  const [searchText, setSearchText] = useState("");
  const [inputMessage, setMessage] = useState("Enter Pokemon Id or Name");
  const enteredText = (event) => {
    setSearchText(event.target.value);
  };

  const searchPokemon = (pokemon) => {
    //set the error handler incase incorrect spelling or id.
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        openDetails({
          name: res.data.name,
          id: res.data.id,
          type:
            res.data.types.length !== 0
              ? res.data.types.map((type) => type.type.name)
              : ["dataNotFound"],
          abilities:
            res.data.abilities.length !== 0
              ? res.data.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")
              : "Data Not Found",
          height: res.data.height,
          weight: res.data.weight,
          moves: res.data.moves.map((move) => move.move.name),
          image: imageSelect(
            res.data.id,
            res.data.sprites.front_default,
            res.data.forms.length !== 0 ? res.data.forms[0].url : null
          ),
          altImage: res.data.forms.length !== 0 ? res.data.forms[0].url : null,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          specialAttack: res.data.stats[3].base_stat,
          specialDefense: res.data.stats[4].base_stat,
          speed: res.data.stats[5].base_stat,
        });
      })
      .catch(() => {
        setMessage("Pokemon not found.");
        setSearchText("");
      });
    setSearchText("");
    setMessage("Enter Pokemon Id or Name");
    closeCard();
    showOptions();
  };

  const searchRange = (pokemon) => {
    rangeList(pokemon);
    setSearchText("");
    showOptions();
  };

  const [className, setClassName] = useState("dropdown-Option");
  const showOptions = () => {
    if (className === "dropdown-Option") {
      setClassName("dropdown-Option show");
    } else setClassName("dropdown-Option");
  };

  return (
    <div className="NavBar">
      <h1 className="pageTitle">Pokedex</h1>
      <div className="navBtn">
        <input
          type="text"
          placeholder={inputMessage}
          onChange={enteredText}
          value={searchText}
        ></input>
        <div className="dropDown">
          <button className="searchOptions" onClick={showOptions}></button>
          <div className={className}>
            <button
              className="optionBtn"
              onClick={() => searchRange(searchText)}
            >
              Search Range
            </button>
            <button
              className="optionBtn"
              onClick={() => searchPokemon(searchText)}
            >
              Search Pokemon
            </button>
          </div>
        </div>
        <button className={"prevBtn"} onClick={previousBtn}></button>
        <button className={"nextBtn"} onClick={nextBtn}></button>
      </div>
    </div>
  );
}

export default Nav;

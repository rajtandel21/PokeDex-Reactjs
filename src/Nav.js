import React, { useState } from "react";
import "./style/style.css";
import axios from "axios";

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
          type: res.data.types.map((type) => type.type.name),
          abilities: res.data.abilities
            .map((ability) => ability.ability.name)
            .join(", "),
          height: res.data.height,
          weight: res.data.weight,
          moves: res.data.moves.map((move) => move.move.name),
          image: ImageUrl(res.data.id),
          altImage: res.data.sprites.front_default,
          altImage2: res.data.forms[0].url,
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

  const [className, setClassName] = useState(["dropdown-Option"]);
  const showOptions = () => {
    if (className === "dropdown-Option") {
      setClassName("dropdown-Option show");
    } else setClassName("dropdown-Option");
  };
  /*<button onClick={() => rangeList(searchText)}>Search List</button>
        <button onClick={() => searchPokemon(searchText)}>
          Search Pokemon
        </button>*/
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
          <button className="searchOptions" onClick={showOptions}>
            Search Options
          </button>
          <div id="options" className={className}>
            <a onClick={() => rangeList(searchText)}>Search Range</a>
            <a onClick={() => searchPokemon(searchText)}>Search Pokemon</a>
          </div>
        </div>
        <button onClick={previousBtn}>Previous</button>
        <button onClick={nextBtn}>Next</button>
      </div>
    </div>
  );
}

export default Nav;

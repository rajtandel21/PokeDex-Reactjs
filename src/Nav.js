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
  const [searchText, setSearchText] = useState(null);
  const enteredText = (event) => {
    setSearchText(event.target.value);
  };
  const searchPokemon = (pokemon) => {
    //set the error handler incase incorrect spelling or id.
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      openDetails({
        name: res.data.name,
        id: res.data.id,
        type: res.data.types.map((type) => type.type.name).join(", "),
        abilities: res.data.abilities
          .map((ability) => ability.ability.name)
          .join(", "),
        height: res.data.height,
        weight: res.data.weight,
        moves: res.data.moves.map((move) => move.move.name).join(", "),
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
    });
    closeCard();
  };

  return (
    <div className="NavBar">
      <h1 className="pageTitle">Pokedex</h1>
      <div>
        <input
          type="text"
          placeholder="Pokemon Range"
          onChange={enteredText}
        ></input>
        <button onClick={() => rangeList(searchText)}>Search List</button>
        <button onClick={() => searchPokemon(searchText)}>
          Search Pokemon
        </button>
      </div>
      <button className="navBtn" onClick={previousBtn}>
        Previous
      </button>
      <button className="navBtn" onClick={nextBtn}>
        Next
      </button>
    </div>
  );
}

export default Nav;

import React, { useState, useEffect } from "react";
import axios from "axios";

//requirements and notes
//make multiple api calls to show list of pokemon.
//clicking on the pokemon will display data of that pokemon on top.

//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png (pokemon image, change ID at end).

function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    axios.get(currentUrl).then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
    });
  }, [currentUrl]);

  return (
    <div>
      {pokemon}
      {nextUrl}
      {prevUrl === null ? "no previous url" : prevUrl}
    </div>
  );
}

export default AllPokemon;
